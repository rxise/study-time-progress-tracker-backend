-- SQLite
SELECT * from session;

UPDATE session SET stopTime = "2023-10-03 20:25:17.144" where stopTime = null;


SELECT SUM((strftime('%s', session.stoptime) - strftime('%s', session.starttime)) / 60) AS totalTimeInMinutes
FROM Session AS session
INNER JOIN User AS user ON user.id = session.userId
INNER JOIN Clan AS clan ON clan.id = user.clanId
WHERE clan.id = "2";
