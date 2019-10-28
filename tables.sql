

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    host_id INTEGER,
    host_postal INTEGER,
    type TEXT,
    name TEXT,
    max_pax INTEGER,
    event_address TEXT,
    event_postal INTEGER,
    event_description TEXT,
    event_photo TEXT,
    event_date DATE,
    start_time TEXT,
    end_time TEXT,
    created_at DATE DEFAULT now(),
    active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS respondent (
	id SERIAL PRIMARY KEY,
  activity_id INTEGER,
  respondent_id INTEGER,
  respondent_name TEXT
);

CREATE TABLE IF NOT EXISTS questions (
	qn_id SERIAL PRIMARY KEY,
	question_title TEXT,
	equipment TEXT,
	question_text TEXT,
	question_photo  TEXT,
	user_id INT,
	question_status TEXT,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS replies (
	id SERIAL PRIMARY KEY,
	replied_user_id INT,
	question_id INT,
	reply_text TEXT,
	reply_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
 	email TEXT,
	first_name TEXT,
	last_name TEXT,
	password TEXT,
	company TEXT,
	department TEXT,
	user_type TEXT
);