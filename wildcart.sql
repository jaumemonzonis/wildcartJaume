-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-11-2018 a las 08:22:20
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.1.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wildcart`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `iva` float DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `fecha`, `iva`, `id_usuario`) VALUES
(1, '2018-10-18 00:00:00', 21, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea`
--

CREATE TABLE `linea` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_factura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `linea`
--

INSERT INTO `linea` (`id`, `cantidad`, `id_producto`, `id_factura`) VALUES
(1, 25, 20, 1),
(2, 35, 40, 1),
(3, 25, 20, NULL),
(4, 35, 40, NULL),
(5, 25, 14, 1),
(6, 32, 33, 1),
(7, 5, 20, 1),
(8, 35, 35, 1),
(9, 2, 9, 1),
(10, 33, 36, 1),
(11, 2, 7, 1),
(12, 5, 36, 1),
(13, 10, 41, 1),
(14, 32, 33, 1),
(15, 5, 18, 1),
(16, 35, 27, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `codigo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `existencias` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `foto` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_tipoproducto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `codigo`, `desc`, `existencias`, `precio`, `foto`, `id_tipoproducto`) VALUES
(5, 'F5Q', 'sistema tren', 3, 555, 'PENE', 2),
(6, 'DFVT52', 'soporte trenes', 2255, 47.8422, 'Fotos', 4),
(7, 'F5Q', ' accesorio coche', 1, 85.0209, 'Foto', 4),
(8, '63P', 'soporte tren', 5, 19.7761, 'Foto', 5),
(9, 'D3Q', 'estación capilar', 2, 18.4308, 'Foto', 5),
(10, 'DP5', 'soporte trabajo', 4, 59.195, 'Foto', 5),
(11, 'D3Q', 'estación capilar', 4, 7.28635, 'Foto', 3),
(12, '84D', 'soporte coche', 2, 99.2651, 'Foto', 5),
(13, '63P', 'estación capilar', 2, 54.5215, 'Foto', 1),
(14, 'F5Q', 'estación capilar', 5, 48.6204, 'Foto', 3),
(15, 'D3Q', 'estación coche', 4, 81.4187, 'Foto', 4),
(16, 'DP5', 'estación capilar', 1, 36.5949, 'Foto', 2),
(17, 'DP5', 'sistema tubos', 5, 78.5043, 'Foto', 4),
(18, 'F5Q', 'sistema coche', 4, 48.0388, 'Foto', 1),
(19, '84D', 'soporte tubos', 5, 68.3279, 'Foto', 4),
(20, 'D3Q', 'tubo tren', 5, 31.5055, 'Foto', 1),
(21, 'DP5', 'sistema coche', 4, 23.1419, 'Foto', 1),
(22, 'DP5', 'estación capilar', 5, 26.0196, 'Foto', 3),
(23, 'DP5', ' accesorio tren', 1, 90.3579, 'Foto', 2),
(24, '63P', ' accesorio tubos', 1, 34.9397, 'Foto', 2),
(25, '63P', 'sistema tren', 4, 60.3961, 'Foto', 4),
(26, '84D', 'soporte tubos', 2, 80.6043, 'Foto', 2),
(27, '84D', 'estación capilar', 5, 65.1577, 'Foto', 2),
(28, '84D', ' accesorio tren', 4, 0.498876, 'Foto', 1),
(29, '84D', ' accesorio trabajo', 5, 20.8368, 'Foto', 4),
(30, '84D', 'estación tubos', 2, 94.6108, 'Foto', 5),
(31, 'F5Q', ' accesorio tren', 2, 26.1544, 'Foto', 5),
(32, '63P', 'sistema coche', 5, 4.43592, 'Foto', 1),
(33, '63P', 'tubo coche', 2, 96.3322, 'Foto', 1),
(34, 'F5Q', 'estación tren', 5, 96.7795, 'Foto', 3),
(35, '84D', 'estación trabajo', 4, 54.2391, 'Foto', 4),
(36, 'F5Q', ' accesorio trabajo', 3, 40.0438, 'Foto', 3),
(37, 'D3Q', 'soporte tren', 3, 13.1319, 'Foto', 3),
(38, 'DP5', 'soporte tubos', 5, 97.1192, 'Foto', 2),
(39, '63P', 'soporte coche', 3, 70.2735, 'Foto', 1),
(40, 'D3Q', 'sistema trabajo', 3, 17.2992, 'Foto', 1),
(41, 'F5Q', 'estación capilar', 4, 87.4507, 'Foto', 1),
(42, 'F5Q', ' accesorio coche', 5, 89.8129, 'Foto', 4),
(43, 'DP5', 'soporte tubos', 5, 63.0283, 'Foto', 1),
(44, '63P', 'sistema tren', 4, 23.6205, 'Foto', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `id` int(11) NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`id`, `desc`) VALUES
(1, 'Metal'),
(2, 'Madera'),
(3, 'Ma'),
(4, 'Hola'),
(5, 'eefwf'),
(6, 'asdasdee'),
(7, 'Pene'),
(10, 'Casco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `id` int(11) NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `desc`) VALUES
(1, 'Administradores'),
(2, 'Usuario'),
(3, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `dni` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `login` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pass` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_tipousuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `dni`, `nombre`, `ape1`, `ape2`, `login`, `pass`, `id_tipousuario`) VALUES
(4, '14756425L', 'kevin', 'Escribano', 'Pozuelo', 'carlos', '8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92', 2),
(5, '7845162f', 'Alex', 'Martinez', 'Escribano', 'carlos', '8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92', 1),
(6, '04631408j', 'Maria', 'Perez', 'Gomez', 'us2', NULL, 1),
(7, '04631408j', 'Marcos', 'Pozuelo', 'Perez', 'usua95f', NULL, 2),
(8, '54698532o', 'Lidia', 'Perez', 'Escribano', 'us2', NULL, 1),
(9, '04631408j', 'Pedro', 'Gomez', 'Escribano', 'usua95f', NULL, 2),
(10, '14756425l', 'Lidia', 'Escribano', 'Gomez', 'usuar5', NULL, 2),
(11, '04631408j', 'Lidia', 'Pozuelo', 'Perez', 'us2', NULL, 2),
(13, '04631408j', 'Lidia', 'Perez', 'Pozuelo', 'us2', NULL, 1),
(14, '04631408j', 'Lidia', 'Escribano', 'Escribano', 'usua6', NULL, 1),
(15, '54698532o', 'Marcos', 'Belmonte', 'Perez', 'usua95f', NULL, 1),
(16, '7845162f', 'Maria', 'Belmonte', 'Martinez', 'us2', NULL, 2),
(17, '04631408j', 'Lidia', 'Gomez', 'Martinez', 'usua95f', NULL, 2),
(18, '54698532o', 'Pedro', 'Martinez', 'Escribano', 'us2', NULL, 1),
(19, '7845162f', 'Hector', 'Martinez', 'Belmonte', 'usuar5', NULL, 2),
(20, '04631408j', 'Lidia', 'Gomez', 'Escribano', 'usuar5', NULL, 2),
(21, '7845162f', 'Maria', 'Escribano', 'Belmonte', 'usuar5', NULL, 2),
(22, '7845162f', 'Lidia', 'Belmonte', 'Martinez', 'usuar5', NULL, 1),
(23, '7845162f', 'Alex', 'Martinez', 'Martinez', 'usu435', NULL, 1),
(24, '14756425l', 'Lidia', 'Pozuelo', 'Perez', 'usu435', NULL, 2),
(25, '7845162f', 'Lidia', 'Gomez', 'Pozuelo', 'usu435', NULL, 2),
(26, '04631408j', 'Pedro', 'Martinez', 'Belmonte', 'usua6', NULL, 1),
(27, '54698532o', 'Maria', 'Perez', 'Escribano', 'usu435', NULL, 2),
(28, '04631408j', 'Maria', 'Pozuelo', 'Martinez', 'us2', NULL, 2),
(29, '04631408j', 'Marcos', 'Belmonte', 'Gomez', 'usua6', NULL, 2),
(30, '7845162f', 'kevin', 'Perez', 'Belmonte', 'us2', NULL, 1),
(31, '7845162f', 'Hector', 'Belmonte', 'Belmonte', 'usua6', NULL, 1),
(32, '04631408j', 'Pedro', 'Gomez', 'Pozuelo', 'us2', NULL, 1),
(33, '54698532o', 'Hector', 'Pozuelo', 'Escribano', 'usu435', NULL, 2),
(34, '54698532o', 'Pedro', 'Perez', 'Martinez', 'usuar5', NULL, 1),
(35, '7845162f', 'Marcos', 'Martinez', 'Pozuelo', 'usuar5', NULL, 1),
(36, '04631408j', 'Lidia', 'Martinez', 'Martinez', 'usua95f', NULL, 2),
(37, '54698532o', 'Hector', 'Belmonte', 'Gomez', 'usuar5', NULL, 2),
(38, '54698532o', 'Alex', 'Perez', 'Belmonte', 'usua95f', NULL, 2),
(39, '7845162f', 'kevin', 'Gomez', 'Escribano', 'us2', NULL, 2),
(40, '04631408j', 'kevin', 'Belmonte', 'Perez', 'usu435', NULL, 1),
(41, '54698532o', 'Hector', 'Pozuelo', 'Martinez', 'usu435', NULL, 1),
(42, '7845162f', 'Hector', 'Belmonte', 'Gomez', 'usua6', NULL, 2),
(43, '54698532o', 'Hector', 'Belmonte', 'Perez', 'us2', NULL, 1),
(44, '04631408j', 'kevin', 'Escribano', 'Gomez', 'us2', NULL, 1),
(45, '14756425l', 'kevin', 'Martinez', 'Pozuelo', 'us2', NULL, 1),
(46, '7845162f', 'kevin', 'Gomez', 'Perez', 'usu435', NULL, 2),
(47, '14756425l', 'Maria', 'Perez', 'Perez', 'usu435', NULL, 2),
(48, '7845162f', 'Alex', 'Gomez', 'Martinez', 'us2', NULL, 1),
(49, '7845162f', 'Maria', 'Pozuelo', 'Pozuelo', 'usua6', NULL, 2),
(50, '04631408j', 'Lidia', 'Belmonte', 'Martinez', 'usu435', NULL, 2),
(51, '54698532o', 'Maria', 'Gomez', 'Gomez', 'usu435', NULL, 2),
(52, '14756425l', 'Marcos', 'Gomez', 'Gomez', 'usua6', NULL, 1),
(53, '7845162f', 'Lidia', 'Gomez', 'Belmonte', 'usua95f', NULL, 2),
(54, '14756425l', 'kevin', 'Martinez', 'Pozuelo', 'us2', NULL, 2),
(55, '14756425l', 'Pedro', 'Perez', 'Martinez', 'usua6', NULL, 2),
(56, '7845162f', 'Lidia', 'Belmonte', 'Belmonte', 'us2', NULL, 1),
(57, '14756425l', 'Pedro', 'Belmonte', 'Belmonte', 'us2', NULL, 2),
(58, '04631408j', 'Maria', 'Belmonte', 'Belmonte', 'usu435', NULL, 2),
(59, '04631408j', 'Marcos', 'Pozuelo', 'Gomez', 'usua95f', NULL, 2),
(60, '54698532o', 'Maria', 'Pozuelo', 'Escribano', 'usuar5', NULL, 2),
(61, '54698532o', 'Alex', 'Perez', 'Pozuelo', 'usua95f', NULL, 1),
(62, '14756425l', 'Pedro', 'Escribano', 'Perez', 'usua95f', NULL, 1),
(63, '54698532o', 'Hector', 'Martinez', 'Martinez', 'usua95f', NULL, 2),
(64, '7845162f', 'Maria', 'Perez', 'Pozuelo', 'us2', NULL, 2),
(65, '04631408j', 'Maria', 'Martinez', 'Perez', 'us2', NULL, 2),
(66, '14756425l', 'Alex', 'Perez', 'Perez', 'usu435', NULL, 1),
(67, '7845162f', 'Pedro', 'Pozuelo', 'Gomez', 'usua6', NULL, 2),
(68, '04631408j', 'Pedro', 'Martinez', 'Martinez', 'us2', NULL, 1),
(69, '54698532o', 'Pedro', 'Pozuelo', 'Martinez', 'us2', NULL, 2),
(70, '14756425l', 'Maria', 'Gomez', 'Gomez', 'usua95f', NULL, 2),
(71, '14756425l', 'Alex', 'Escribano', 'Martinez', 'usua6', NULL, 2),
(72, '14756425l', 'Marcos', 'Martinez', 'Belmonte', 'usu435', NULL, 1),
(73, '14756425l', 'Lidia', 'Pozuelo', 'Belmonte', 'usuar5', NULL, 2),
(74, '7845162f', 'Marcos', 'Perez', 'Escribano', 'usua6', NULL, 2),
(75, '7845162f', 'Maria', 'Belmonte', 'Escribano', 'usua6', NULL, 1),
(76, '54698532o', 'Marcos', 'Martinez', 'Belmonte', 'usuar5', NULL, 2),
(77, '04631408j', 'Marcos', 'Pozuelo', 'Pozuelo', 'usu435', NULL, 1),
(78, '14756425l', 'kevin', 'Belmonte', 'Pozuelo', 'usu435', NULL, 2),
(79, '54698532o', 'kevin', 'Martinez', 'Martinez', 'usuar5', NULL, 2),
(80, '04631408j', 'Maria', 'Escribano', 'Pozuelo', 'usua95f', NULL, 2),
(81, '7845162f', 'Marcos', 'Martinez', 'Pozuelo', 'usua95f', NULL, 1),
(82, '14756425l', 'Alex', 'Perez', 'Gomez', 'usua95f', NULL, 1),
(83, '7845162f', 'Pedro', 'Belmonte', 'Perez', 'usua95f', NULL, 1),
(84, '04631408j', 'Hector', 'Escribano', 'Gomez', 'usu435', NULL, 1),
(85, '7845162f', 'kevin', 'Belmonte', 'Pozuelo', 'usu435', NULL, 2),
(86, '04631408j', 'Alex', 'Gomez', 'Belmonte', 'usua95f', NULL, 1),
(87, '7845162f', 'kevin', 'Martinez', 'Gomez', 'usu435', NULL, 2),
(88, '14756425l', 'Pedro', 'Gomez', 'Belmonte', 'usua6', NULL, 1),
(89, '7845162f', 'Hector', 'Martinez', 'Pozuelo', 'us2', NULL, 1),
(90, '14756425l', 'Maria', 'Gomez', 'Martinez', 'usu435', NULL, 2),
(91, '7845162f', 'Maria', 'Perez', 'Martinez', 'usua95f', NULL, 2),
(92, '04631408j', 'Pedro', 'Martinez', 'Escribano', 'usua95f', NULL, 1),
(93, '14756425l', 'kevin', 'Pozuelo', 'Pozuelo', 'usu435', NULL, 2),
(94, '04631408j', 'Hector', 'Martinez', 'Belmonte', 'usu435', NULL, 1),
(95, '7845162f', 'Pedro', 'Pozuelo', 'Perez', 'usu435', NULL, 1),
(96, '14756425l', 'Maria', 'Perez', 'Perez', 'usuar5', NULL, 1),
(97, '04631408j', 'Lidia', 'Belmonte', 'Escribano', 'usuar5', NULL, 1),
(98, '14756425l', 'Maria', 'Perez', 'Escribano', 'us2', NULL, 1),
(99, '7845162f', 'Pedro', 'Gomez', 'Pozuelo', 'usu435', NULL, 2),
(100, '04631408j', 'Marcos', 'Pozuelo', 'Perez', 'usua6', NULL, 1),
(101, '7845162f', 'Lidia', 'Gomez', 'Gomez', 'usu435', NULL, 2),
(102, '04631408j', 'Pedro', 'Pozuelo', 'Belmonte', 'usua6', NULL, 2),
(103, '54698532o', 'Pedro', 'Martinez', 'Pozuelo', 'usu435', NULL, 2),
(104, '14756425l', 'Alex', 'Martinez', 'Martinez', 'us2', NULL, 2),
(105, '7845162f', 'Pedro', 'Escribano', 'Escribano', 'usua6', NULL, 2),
(106, '04631408j', 'Lidia', 'Pozuelo', 'Pozuelo', 'usu435', NULL, 2),
(107, '54698532o', 'kevin', 'Escribano', 'Pozuelo', 'usua95f', NULL, 1),
(108, '54698532o', 'kevin', 'Pozuelo', 'Gomez', 'usu435', NULL, 1),
(109, '7845162f', 'Alex', 'Belmonte', 'Perez', 'usua95f', NULL, 2),
(110, '54698532o', 'Marcos', 'Escribano', 'Pozuelo', 'usu435', NULL, 1),
(111, '7845162f', 'Pedro', 'Gomez', 'Martinez', 'us2', NULL, 2),
(112, '54698532o', 'Hector', 'Escribano', 'Perez', 'usua95f', NULL, 1),
(113, '7845162f', 'Maria', 'Pozuelo', 'Pozuelo', 'usua6', NULL, 1),
(114, '7845162f', 'Marcos', 'Pozuelo', 'Pozuelo', 'usua95f', NULL, 2),
(115, '54698532o', 'Pedro', 'Martinez', 'Gomez', 'usu435', NULL, 2),
(116, '14756425l', 'kevin', 'Belmonte', 'Perez', 'us2', NULL, 1),
(117, '04631408j', 'Alex', 'Martinez', 'Escribano', 'us2', NULL, 1),
(118, '7845162f', 'Alex', 'Escribano', 'Perez', 'usua95f', NULL, 2),
(119, '04631408j', 'Lidia', 'Gomez', 'Martinez', 'usuar5', NULL, 2),
(120, '14756425l', 'Maria', 'Martinez', 'Pozuelo', 'us2', NULL, 2),
(121, '04631408j', 'kevin', 'Gomez', 'Martinez', 'usuar5', NULL, 2),
(122, '04631408j', 'kevin', 'Martinez', 'Martinez', 'usu435', NULL, 2),
(123, '04631408j', 'Maria', 'Martinez', 'Pozuelo', 'usua6', NULL, 1),
(124, '14756425l', 'kevin', 'Pozuelo', 'Gomez', 'usua6', NULL, 1),
(125, '14756425l', 'kevin', 'Martinez', 'Escribano', 'usua6', NULL, 1),
(126, '7845162f', 'Alex', 'Gomez', 'Pozuelo', 'usua6', NULL, 2),
(127, '54698532o', 'Maria', 'Martinez', 'Perez', 'usuar5', NULL, 2),
(128, '04631408j', 'Alex', 'Martinez', 'Pozuelo', 'usua95f', NULL, 2),
(129, '04631408j', 'kevin', 'Pozuelo', 'Pozuelo', 'usua6', NULL, 1),
(130, '7845162f', 'Pedro', 'Gomez', 'Escribano', 'usua6', NULL, 1),
(131, '14756425l', 'Lidia', 'Escribano', 'Pozuelo', 'us2', NULL, 1),
(132, '7845162f', 'Marcos', 'Perez', 'Pozuelo', 'usua6', NULL, 2),
(133, '54698532o', 'Lidia', 'Belmonte', 'Martinez', 'usua95f', NULL, 1),
(134, '7845162f', 'Hector', 'Belmonte', 'Pozuelo', 'usu435', NULL, 2),
(135, '14756425l', 'kevin', 'Martinez', 'Escribano', 'usua95f', NULL, 2),
(136, '54698532o', 'kevin', 'Pozuelo', 'Escribano', 'usuar5', NULL, 1),
(137, '04631408j', 'Alex', 'Martinez', 'Pozuelo', 'us2', NULL, 1),
(138, '14756425l', 'Maria', 'Martinez', 'Perez', 'usu435', NULL, 2),
(139, '54698532o', 'kevin', 'Pozuelo', 'Pozuelo', 'usuar5', NULL, 2),
(140, '04631408j', 'Pedro', 'Gomez', 'Pozuelo', 'usuar5', NULL, 1),
(141, '54698532o', 'Marcos', 'Pozuelo', 'Martinez', 'usua95f', NULL, 2),
(142, '54698532o', 'Hector', 'Escribano', 'Belmonte', 'usua95f', NULL, 1),
(143, '14756425l', 'Pedro', 'Martinez', 'Martinez', 'usuar5', NULL, 1),
(144, '7845162f', 'Hector', 'Perez', 'Belmonte', 'usu435', NULL, 1),
(145, '7845162f', 'Maria', 'Pozuelo', 'Gomez', 'usuar5', NULL, 2),
(146, '14756425l', 'kevin', 'Martinez', 'Pozuelo', 'usu435', NULL, 2),
(147, '14756425l', 'kevin', 'Escribano', 'Martinez', 'usuar5', NULL, 2),
(148, '04631408j', 'Hector', 'Martinez', 'Perez', 'usu435', NULL, 2),
(149, '54698532o', 'Alex', 'Martinez', 'Escribano', 'us2', NULL, 1),
(150, '7845162f', 'Marcos', 'Gomez', 'Martinez', 'usu435', NULL, 1),
(151, '54698532o', 'kevin', 'Pozuelo', 'Gomez', 'usua6', NULL, 2),
(152, '7845162f', 'Lidia', 'Perez', 'Escribano', 'usu435', NULL, 1),
(153, '54698532o', 'Lidia', 'Perez', 'Martinez', 'usua95f', NULL, 2),
(154, '54698532o', 'Hector', 'Escribano', 'Escribano', 'usua6', NULL, 1),
(155, '04631408j', 'Lidia', 'Martinez', 'Gomez', 'usu435', NULL, 1),
(156, '7845162f', 'Alex', 'Pozuelo', 'Pozuelo', 'us2', NULL, 1),
(157, '54698532o', 'Lidia', 'Pozuelo', 'Perez', 'us2', NULL, 1),
(158, '7845162f', 'Marcos', 'Belmonte', 'Gomez', 'usu435', NULL, 1),
(159, '54698532o', 'Hector', 'Perez', 'Pozuelo', 'us2', NULL, 1),
(160, '54698532o', 'Maria', 'Perez', 'Pozuelo', 'usu435', NULL, 2),
(161, '14756425l', 'kevin', 'Escribano', 'Gomez', 'usua6', NULL, 1),
(162, '14756425l', 'Alex', 'Pozuelo', 'Pozuelo', 'usua6', NULL, 2),
(163, '7845162f', 'kevin', 'Belmonte', 'Gomez', 'usuar5', NULL, 2),
(164, '04631408j', 'Maria', 'Pozuelo', 'Gomez', 'usua6', NULL, 1),
(165, '54698532o', 'Pedro', 'Escribano', 'Pozuelo', 'usua6', NULL, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_factura_usuario1_idx` (`id_usuario`);

--
-- Indices de la tabla `linea`
--
ALTER TABLE `linea`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_linea_producto1_idx` (`id_producto`),
  ADD KEY `fk_linea_factura1_idx` (`id_factura`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_producto_tipoProducto1_idx` (`id_tipoproducto`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_tipoUsuario_idx` (`id_tipousuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `linea`
--
ALTER TABLE `linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `linea`
--
ALTER TABLE `linea`
  ADD CONSTRAINT `fk_linea_factura1` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_linea_producto1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_tipoProducto1` FOREIGN KEY (`id_tipoproducto`) REFERENCES `tipoproducto` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_tipoUsuario` FOREIGN KEY (`id_tipousuario`) REFERENCES `tipousuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
