-- Enable the http extension to make HTTP requests
create extension if not exists http with schema extensions;

-- Create or replace the function that sends email notifications
create or replace function public.send_contact_email_notification()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  -- Call the edge function to send email
  perform
    net.http_post(
      url := 'https://fcneqcsiixednrukbpxe.supabase.co/functions/v1/send-contact-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjbmVxY3NpaXhlZG5ydWticHhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTk0OTE0NywiZXhwIjoyMDcxNTI1MTQ3fQ.Yl6SUJJ8iY4NKeDj7BoXhcJ6kz5HPqADWZDwJdTPKsw'
      ),
      body := jsonb_build_object('record', to_jsonb(NEW))
    );
    
  return NEW;
end;
$$;

-- Create the trigger
drop trigger if exists contact_email_notification_trigger on public.contacts;

create trigger contact_email_notification_trigger
  after insert on public.contacts
  for each row
  execute function public.send_contact_email_notification();