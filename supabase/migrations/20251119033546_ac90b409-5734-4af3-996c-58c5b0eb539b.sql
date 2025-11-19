-- Make meeting_code optional and add google_meet_email for verification
ALTER TABLE public.attendance 
ALTER COLUMN meeting_code DROP NOT NULL,
ADD COLUMN google_meet_email TEXT,
ADD COLUMN verified BOOLEAN DEFAULT false,
ADD COLUMN meet_link TEXT;

-- Add index for faster lookups
CREATE INDEX idx_attendance_student_subject ON public.attendance(student_id, subject_id);
CREATE INDEX idx_attendance_verified ON public.attendance(verified);
CREATE INDEX idx_attendance_google_email ON public.attendance(google_meet_email);