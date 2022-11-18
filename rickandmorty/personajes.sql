-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2022 a las 00:20:57
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rickandmorty`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `id_personaje` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `especie` text COLLATE utf8_spanish_ci NOT NULL,
  `estado` text COLLATE utf8_spanish_ci NOT NULL,
  `genero` text COLLATE utf8_spanish_ci NOT NULL,
  `origen` text COLLATE utf8_spanish_ci NOT NULL,
  `ubicación` text COLLATE utf8_spanish_ci NOT NULL,
  `foto` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `id_personaje`, `nombre`, `especie`, `estado`, `genero`, `origen`, `ubicación`, `foto`) VALUES
(0, 0, '0', '0', '0', '0', '0', '0', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
