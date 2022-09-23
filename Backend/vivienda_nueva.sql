

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



--
-- Base de datos: `vivienda_nueva`
--


CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `ubication` varchar(20) NOT NULL,
  `description` varchar(280) NOT NULL,
  `metros` float NOT NULL,
  `image` varchar(450) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `proyectos` (`id`, `name`, `ubication`, `description`, `metros`, `image`) VALUES
(1, 'vista los bravos', 'La Dehesa,Santiago', 'nuevo modelo, fachadas sólidas en ambos pisos y nuevas terminaciones.', 263.6,'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(2, 'Alkura', 'Chicureo, Ssntiago', 'Lo que para otros es impresionante a ti te resultará familiar, porque puedes disfrutarlo todos los días.', 237.7, 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(3, 'Punta Mitenes', 'Huechuraba, Santiago', 'Cocina integrada al living-comedor, tal como en un depto, y conectadas al patio para compartir con total libertad.',210.4 , 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(4, 'Laguna Cónderes', 'San Bernardo, Santiago', 'Disfruta en los espacios integrados de tu casa, en la terraza con quincho y en el Club House con Laguna del condominio.', 310 , 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(5, 'Los Coihues', 'Lampa, Santiago', 'Los Coihues sigue sorprendiendo -ahora en su etapa 5; con un nuevo modelo, fachadas sólidas en ambos pisos y nuevas terminaciones.',270.6 , 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(6, 'Portal de Machalí', 'Rancagua', 'Otra categoría en Machalí: Condominio de casas con un diseño exterior, distribuciones y terminaciones sin referentes.', 325.7, 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');


CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `users` (`user_id`, `user_name`, `user_pass`) VALUES
(1, 'marcelobettini', '827ccb0eea8a706c4c34a16891f84e7b');

ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);


ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;


ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;


