USE [master]
GO
/****** Object:  Database [Agencia]    Script Date: 20/08/2016 09:47:17 a.m. ******/
CREATE DATABASE [Agencia]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Agencia', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Agencia.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Agencia_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Agencia_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Agencia] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Agencia].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Agencia] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Agencia] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Agencia] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Agencia] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Agencia] SET ARITHABORT OFF 
GO
ALTER DATABASE [Agencia] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Agencia] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Agencia] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Agencia] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Agencia] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Agencia] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Agencia] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Agencia] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Agencia] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Agencia] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Agencia] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Agencia] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Agencia] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Agencia] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Agencia] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Agencia] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Agencia] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Agencia] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Agencia] SET  MULTI_USER 
GO
ALTER DATABASE [Agencia] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Agencia] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Agencia] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Agencia] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Agencia] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Agencia]
GO
/****** Object:  Table [dbo].[Ciudad]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Ciudad](
	[idCiudad] [int] IDENTITY(1,1) NOT NULL,
	[NombreCiudad] [varchar](50) NULL,
	[idPais] [int] NULL,
 CONSTRAINT [PK_Ciudad] PRIMARY KEY CLUSTERED 
(
	[idCiudad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Cliente](
	[idCliente] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Apellidos] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[Telefono] [varchar](50) NULL,
	[Contrasena] [varbinary](50) NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[idCliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DetallePaquete]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetallePaquete](
	[idPaquete] [int] NOT NULL,
	[VueloIda] [int] NOT NULL,
	[VueloSalida] [int] NOT NULL,
	[ReservacionHotel] [int] NOT NULL,
 CONSTRAINT [PK_DetallePaquete] PRIMARY KEY CLUSTERED 
(
	[idPaquete] ASC,
	[VueloIda] ASC,
	[VueloSalida] ASC,
	[ReservacionHotel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Hoteles]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Hoteles](
	[idHotel] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NULL,
	[CostoNoche] [float] NULL,
	[Estrellas] [int] NULL,
	[CostoBase] [float] NULL,
	[idPais] [int] NULL,
	[tipoHabitacion] [int] NULL,
	[NombreHotel] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Hoteles] PRIMARY KEY CLUSTERED 
(
	[idHotel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Pais]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Pais](
	[idPais] [int] IDENTITY(1,1) NOT NULL,
	[NombrePais] [varchar](50) NULL,
 CONSTRAINT [PK_Pais] PRIMARY KEY CLUSTERED 
(
	[idPais] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Paquete]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Paquete](
	[idPaquete] [int] IDENTITY(1,1) NOT NULL,
	[idCliente] [int] NULL,
	[Estado] [bit] NULL,
	[Monto] [float] NULL,
	[FechaCreacion] [datetime] NULL,
 CONSTRAINT [PK_Paquete] PRIMARY KEY CLUSTERED 
(
	[idPaquete] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ReservacionHotel]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReservacionHotel](
	[idReservacionHotel] [int] NOT NULL,
	[CantidadPersonas] [int] NULL,
	[MontoTotal] [float] NULL,
	[idHotel] [int] NULL,
 CONSTRAINT [PK_ReservacionHotel] PRIMARY KEY CLUSTERED 
(
	[idReservacionHotel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ReservacionVuelo]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReservacionVuelo](
	[idReservacionVuelo] [int] NOT NULL,
	[CantidadPersonas] [int] NULL,
	[MontoTotal] [float] NULL,
	[idVuelo] [int] NULL,
 CONSTRAINT [PK_ReservacionVuelo] PRIMARY KEY CLUSTERED 
(
	[idReservacionVuelo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tipoClaseVuelo]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipoClaseVuelo](
	[idTipoClaseVuelo] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nchar](10) NULL,
 CONSTRAINT [PK_tipoClaseVuelo] PRIMARY KEY CLUSTERED 
(
	[idTipoClaseVuelo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tipoHabitacion]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tipoHabitacion](
	[idTipoHabitacion] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NULL,
 CONSTRAINT [PK_tipoHabitacion] PRIMARY KEY CLUSTERED 
(
	[idTipoHabitacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Vuelo]    Script Date: 20/08/2016 09:47:17 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Vuelo](
	[idVuelo] [int] IDENTITY(1,1) NOT NULL,
	[CiudadOrigen] [int] NULL,
	[CiudadDestino] [int] NULL,
	[FechaSalida] [datetime] NULL,
	[FechaLlegada] [datetime] NULL,
	[Capacidad] [int] NULL,
	[Aerolinea] [varchar](50) NULL,
	[Clase] [int] NULL,
	[PrecioBase] [float] NULL,
	[Escala] [bit] NULL,
	[CantidadEscalas] [int] NULL,
 CONSTRAINT [PK_Vuelo] PRIMARY KEY CLUSTERED 
(
	[idVuelo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Ciudad] ON 

INSERT [dbo].[Ciudad] ([idCiudad], [NombreCiudad], [idPais]) VALUES (2, N'Cartago', 8)
INSERT [dbo].[Ciudad] ([idCiudad], [NombreCiudad], [idPais]) VALUES (3, N'Heredia', 1)
INSERT [dbo].[Ciudad] ([idCiudad], [NombreCiudad], [idPais]) VALUES (1004, N'Barranquilla', 9)
SET IDENTITY_INSERT [dbo].[Ciudad] OFF
SET IDENTITY_INSERT [dbo].[Hoteles] ON 

INSERT [dbo].[Hoteles] ([idHotel], [Descripcion], [CostoNoche], [Estrellas], [CostoBase], [idPais], [tipoHabitacion], [NombreHotel]) VALUES (4, N'desc1', 500, 5, 100, 1, 1, N'Ritz')
INSERT [dbo].[Hoteles] ([idHotel], [Descripcion], [CostoNoche], [Estrellas], [CostoBase], [idPais], [tipoHabitacion], [NombreHotel]) VALUES (1003, N'Belen', 500, 3, 100, 8, 1, N'Marriot')
SET IDENTITY_INSERT [dbo].[Hoteles] OFF
SET IDENTITY_INSERT [dbo].[Pais] ON 

INSERT [dbo].[Pais] ([idPais], [NombrePais]) VALUES (1, N'Costa Rica')
INSERT [dbo].[Pais] ([idPais], [NombrePais]) VALUES (8, N'Peru')
INSERT [dbo].[Pais] ([idPais], [NombrePais]) VALUES (9, N'Colombia')
SET IDENTITY_INSERT [dbo].[Pais] OFF
SET IDENTITY_INSERT [dbo].[tipoClaseVuelo] ON 

INSERT [dbo].[tipoClaseVuelo] ([idTipoClaseVuelo], [Descripcion]) VALUES (2, N'Primera   ')
INSERT [dbo].[tipoClaseVuelo] ([idTipoClaseVuelo], [Descripcion]) VALUES (1002, N'Turista   ')
SET IDENTITY_INSERT [dbo].[tipoClaseVuelo] OFF
SET IDENTITY_INSERT [dbo].[tipoHabitacion] ON 

INSERT [dbo].[tipoHabitacion] ([idTipoHabitacion], [Descripcion]) VALUES (1, N'Doble')
INSERT [dbo].[tipoHabitacion] ([idTipoHabitacion], [Descripcion]) VALUES (2, N'Suite')
INSERT [dbo].[tipoHabitacion] ([idTipoHabitacion], [Descripcion]) VALUES (4, N'Simple')
SET IDENTITY_INSERT [dbo].[tipoHabitacion] OFF
SET IDENTITY_INSERT [dbo].[Vuelo] ON 

INSERT [dbo].[Vuelo] ([idVuelo], [CiudadOrigen], [CiudadDestino], [FechaSalida], [FechaLlegada], [Capacidad], [Aerolinea], [Clase], [PrecioBase], [Escala], [CantidadEscalas]) VALUES (1, 2, 2, CAST(N'2016-08-03 00:00:00.000' AS DateTime), CAST(N'2016-08-24 00:00:00.000' AS DateTime), 500, N'Lacsa', 2, 152, 1, 2)
SET IDENTITY_INSERT [dbo].[Vuelo] OFF
ALTER TABLE [dbo].[Ciudad]  WITH CHECK ADD  CONSTRAINT [FK_Ciudad_Pais] FOREIGN KEY([idPais])
REFERENCES [dbo].[Pais] ([idPais])
GO
ALTER TABLE [dbo].[Ciudad] CHECK CONSTRAINT [FK_Ciudad_Pais]
GO
ALTER TABLE [dbo].[DetallePaquete]  WITH CHECK ADD  CONSTRAINT [FK_DetallePaquete_Paquete] FOREIGN KEY([idPaquete])
REFERENCES [dbo].[Paquete] ([idPaquete])
GO
ALTER TABLE [dbo].[DetallePaquete] CHECK CONSTRAINT [FK_DetallePaquete_Paquete]
GO
ALTER TABLE [dbo].[DetallePaquete]  WITH CHECK ADD  CONSTRAINT [FK_DetallePaquete_ReservacionHotel] FOREIGN KEY([ReservacionHotel])
REFERENCES [dbo].[ReservacionHotel] ([idReservacionHotel])
GO
ALTER TABLE [dbo].[DetallePaquete] CHECK CONSTRAINT [FK_DetallePaquete_ReservacionHotel]
GO
ALTER TABLE [dbo].[DetallePaquete]  WITH CHECK ADD  CONSTRAINT [FK_DetallePaquete_ReservacionVueloIda] FOREIGN KEY([VueloIda])
REFERENCES [dbo].[ReservacionVuelo] ([idReservacionVuelo])
GO
ALTER TABLE [dbo].[DetallePaquete] CHECK CONSTRAINT [FK_DetallePaquete_ReservacionVueloIda]
GO
ALTER TABLE [dbo].[DetallePaquete]  WITH CHECK ADD  CONSTRAINT [FK_DetallePaquete_ReservacionVueloSalida] FOREIGN KEY([VueloSalida])
REFERENCES [dbo].[ReservacionVuelo] ([idReservacionVuelo])
GO
ALTER TABLE [dbo].[DetallePaquete] CHECK CONSTRAINT [FK_DetallePaquete_ReservacionVueloSalida]
GO
ALTER TABLE [dbo].[Hoteles]  WITH CHECK ADD  CONSTRAINT [FK_Hoteles_Pais] FOREIGN KEY([idPais])
REFERENCES [dbo].[Pais] ([idPais])
GO
ALTER TABLE [dbo].[Hoteles] CHECK CONSTRAINT [FK_Hoteles_Pais]
GO
ALTER TABLE [dbo].[Hoteles]  WITH CHECK ADD  CONSTRAINT [FK_Hoteles_tipoHabitacion] FOREIGN KEY([tipoHabitacion])
REFERENCES [dbo].[tipoHabitacion] ([idTipoHabitacion])
GO
ALTER TABLE [dbo].[Hoteles] CHECK CONSTRAINT [FK_Hoteles_tipoHabitacion]
GO
ALTER TABLE [dbo].[Paquete]  WITH CHECK ADD  CONSTRAINT [FK_Paquete_Cliente] FOREIGN KEY([idCliente])
REFERENCES [dbo].[Cliente] ([idCliente])
GO
ALTER TABLE [dbo].[Paquete] CHECK CONSTRAINT [FK_Paquete_Cliente]
GO
ALTER TABLE [dbo].[ReservacionHotel]  WITH CHECK ADD  CONSTRAINT [FK_ReservacionHotel_Hoteles] FOREIGN KEY([idHotel])
REFERENCES [dbo].[Hoteles] ([idHotel])
GO
ALTER TABLE [dbo].[ReservacionHotel] CHECK CONSTRAINT [FK_ReservacionHotel_Hoteles]
GO
ALTER TABLE [dbo].[ReservacionVuelo]  WITH CHECK ADD  CONSTRAINT [FK_ReservacionVuelo_Vuelo] FOREIGN KEY([idVuelo])
REFERENCES [dbo].[Vuelo] ([idVuelo])
GO
ALTER TABLE [dbo].[ReservacionVuelo] CHECK CONSTRAINT [FK_ReservacionVuelo_Vuelo]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_CiudadDestino] FOREIGN KEY([CiudadDestino])
REFERENCES [dbo].[Ciudad] ([idCiudad])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_CiudadDestino]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_CiudadOrigen] FOREIGN KEY([CiudadOrigen])
REFERENCES [dbo].[Ciudad] ([idCiudad])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_CiudadOrigen]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_tipoClaseVuelo] FOREIGN KEY([Clase])
REFERENCES [dbo].[tipoClaseVuelo] ([idTipoClaseVuelo])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_tipoClaseVuelo]
GO
USE [master]
GO
ALTER DATABASE [Agencia] SET  READ_WRITE 
GO
