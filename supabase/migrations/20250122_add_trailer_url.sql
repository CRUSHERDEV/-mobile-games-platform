-- Add trailer_url column to games table
ALTER TABLE games ADD COLUMN IF NOT EXISTS trailer_url TEXT;
