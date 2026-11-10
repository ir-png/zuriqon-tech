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

  // Fallback: send to our Express API that stores in MySQL
  const backendUrl = import.meta.env.VITE_API_URL || '';
  if (!backendUrl) {
    console.warn('No backend URL configured; inquiry will be logged locally.');
    console.info('Inquiry payload:', inquiryData);
    return { success: true, mode: 'log-only', message: 'No backend URL configured.' };
  }
  const response = await fetch(`${backendUrl}/api/quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryData),
  });
  if (!response.ok) {
    const err = await response.json();
    console.error('Backend error inserting inquiry:', err);
    throw new Error(err.error || 'Backend request failed');
  }
  const result = await response.json();
  return { success: true, mode: 'mysql', data: result };
}


