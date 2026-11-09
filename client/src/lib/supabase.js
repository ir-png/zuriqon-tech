import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submit an inquiry to Supabase or handle fallback cleanly
 * @param {{ fullName: string, email: string, phone?: string, service: string, message: string }} inquiryData
 */
export async function submitInquiry(inquiryData) {
  // Validate basic payload
  if (!inquiryData.fullName || !inquiryData.email || !inquiryData.service || !inquiryData.message) {
    throw new Error('Please fill in all required fields.');
  }

  // If Supabase credentials are configured, insert into the `inquiries` table
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          full_name: inquiryData.fullName,
          email: inquiryData.email,
          phone: inquiryData.phone || null,
          requested_service: inquiryData.service,
          project_description: inquiryData.message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase error inserting inquiry:', error);
      throw error;
    }
    return { success: true, mode: 'supabase', data };
  }

  // Graceful simulated delivery when Supabase environment variables are pending
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.info('Inquiry recorded locally (Supabase keys pending):', inquiryData);
  return {
    success: true,
    mode: 'simulation',
    message: 'Inquiry received. Once VITE_SUPABASE_URL is connected, inquiries are automatically written to your Supabase PostgreSQL inquiries table.'
  };
}

