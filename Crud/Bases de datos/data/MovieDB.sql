-- MySQL Script generated by MySQL Workbench
-- Fri Sep 24 10:18:25 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema movie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movie` ;
USE `movie` ;

-- -----------------------------------------------------
-- Table `movie`.`actor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`actor` (
  `act_id` INT NOT NULL,
  `act_fname` CHAR(20) NOT NULL,
  `act_lname` CHAR(20) NOT NULL,
  `act_gender` CHAR(1) NOT NULL,
  PRIMARY KEY (`act_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`movie` (
  `mov_id` INT NOT NULL,
  `mov_title` CHAR(50) NOT NULL,
  `mov_year` INT NOT NULL,
  `mov_time` INT NOT NULL,
  `mov_lang` CHAR(50) NOT NULL,
  `mov_dt_rel` DATE NULL,
  `mov_rel_country` CHAR(5) NOT NULL,
  PRIMARY KEY (`mov_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie`.`movie_cast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`movie_cast` (
  `movie_cast_id` INT NOT NULL AUTO_INCREMENT,
  `act_id` INT NOT NULL,
  `movie_mov_id` INT NOT NULL,
  `role` CHAR(30) NOT NULL,
  PRIMARY KEY (`movie_cast_id`, `act_id`, `movie_mov_id`),
  CONSTRAINT `fk_actor_movie_cast`
    FOREIGN KEY (`act_id`)
    REFERENCES `movie`.`actor` (`act_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_movie_cast_movie1`
    FOREIGN KEY (`movie_mov_id`)
    REFERENCES `movie`.`movie` (`mov_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_movie_cast_movie1_idx` ON `movie`.`movie_cast` (`movie_mov_id` ASC);


-- -----------------------------------------------------
-- Table `movie`.`director`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`director` (
  `dir_id` INT NOT NULL,
  `dir_fname` CHAR(20) NOT NULL,
  `dir_lname` CHAR(20) NOT NULL,
  PRIMARY KEY (`dir_id`))
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `movie`.`reviewer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`reviewer` (
  `rev_id` INT NOT NULL,
  `rev_name` CHAR(30) NULL,
  PRIMARY KEY (`rev_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie`.`rating`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`rating` (
  `rating_id` INT NOT NULL AUTO_INCREMENT,
  `mov_id` INT NOT NULL,
  `rev_id` INT NOT NULL,
  `rev_stars` FLOAT NULL,
  `num_o_ratings` INT NULL,
  PRIMARY KEY (`rating_id`, `mov_id`, `rev_id`),
  CONSTRAINT `fk_movie_rating`
    FOREIGN KEY (`mov_id`)
    REFERENCES `movie`.`movie` (`mov_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_reviewer_rating`
    FOREIGN KEY (`rev_id`)
    REFERENCES `movie`.`reviewer` (`rev_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_movie_rating_idx` ON `movie`.`rating` (`mov_id` ASC);

CREATE INDEX `fk_reviewer_rating_idx` ON `movie`.`rating` (`rev_id` ASC);


-- -----------------------------------------------------
-- Table `movie`.`movie_direction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`movie_direction` (
  `movie_direction_id` INT NOT NULL AUTO_INCREMENT,
  `dir_id` INT NOT NULL,
  `mov_id` INT NOT NULL,
  PRIMARY KEY (`movie_direction_id`, `dir_id`, `mov_id`),
  CONSTRAINT `fk_director_movie_direction`
    FOREIGN KEY (`dir_id`)
    REFERENCES `movie`.`director` (`dir_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_movie_movie_direction`
    FOREIGN KEY (`mov_id`)
    REFERENCES `movie`.`movie` (`mov_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_movie_movie_direction_idx` ON `movie`.`movie_direction` (`mov_id` ASC);


-- -----------------------------------------------------
-- Table `movie`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`genres` (
  `gen_id` INT NOT NULL,
  `gen_title` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`gen_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie`.`movie_genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie`.`movie_genres` (
  `movie_genres_id` INT NOT NULL AUTO_INCREMENT,
  `mov_id` INT NOT NULL,
  `gen_id` INT NOT NULL,
  PRIMARY KEY (`movie_genres_id`, `mov_id`, `gen_id`),
  CONSTRAINT `fk_genres_movie_genres`
    FOREIGN KEY (`gen_id`)
    REFERENCES `movie`.`genres` (`gen_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_movie_movie_genres`
    FOREIGN KEY (`mov_id`)
    REFERENCES `movie`.`movie` (`mov_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_genres_movie_genres_idx` ON `movie`.`movie_genres` (`gen_id` ASC) ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
