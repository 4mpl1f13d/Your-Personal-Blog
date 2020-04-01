-- CREATE SCHEMA `blogs` ;

-- CREATE TABLE authors (
-- id INT NOT NULL AUTO_INCREMENT, 
-- name VARCHAR(50) NOT NULL,
-- email VARCHAR(60) NOT NULL UNIQUE, 
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE blogs (
-- id INT NOT NULL AUTO_INCREMENT, 
-- title VARCHAR(200) NOT NULL,
-- content VARCHAR(200) NOT NULL, 
-- authorid INT NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id),
-- FOREIGN KEY (authorid) REFERENCES authors (id)
-- );

-- CREATE TABLE tags (
-- id INT NOT NULL AUTO_INCREMENT,
-- name VARCHAR(50) NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE blogtags (
-- blogid INT NOT NULL,
-- tagid INT NOT NULL,
-- PRIMARY KEY (blogid, tagid)
-- );

-- Create stored proceedure
delimiter //
CREATE PROCEDURE spBlogTags 
(blogid int)

BEGIN
	SELECT
		*
	FROM blogtags u
	JOIN tags l 
	on l.id = u.tagid
	where u.blogid = blogid;
END//
delimiter ;

-- Call the Proceedure using
CALL spBlogTags (blogid);

-- use blogs

-- // blogUser blogUser1
-- // https://linuxize.com/post/how-to-create-mysql-user-accounts-and-grant-privileges/
