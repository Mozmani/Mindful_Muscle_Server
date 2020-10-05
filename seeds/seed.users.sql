BEGIN;

TRUNCATE
  users
  RESTART IDENTITY CASCADE;


INSERT INTO users (user_email, nick_name, user_name, password)
VALUES
('SwiftTactics@gmail.com', 'Mark', 'RipOut', '$2a$10$TBi9nx9gVtnqgCMdiwSC.u.ey6K4Iw8cCfv5nosUedTnYhV3i8vym');

COMMIT;