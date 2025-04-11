import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChevronLeft, Heart, MessageSquare, PaletteIcon, Play, PopcornIcon, Share2, Star } from "lucide-react";

export default function SeriesPage({ params }: { params: { id: string } }) {
	// En una implementación real, estos datos vendrían de una API
	const series = {
		id: params.id,
		title: "Atomic Habits",
		author: "James Clear",
		description:
			"Descubre cómo pequeños cambios pueden transformar tus resultados. Basado en el bestseller de James Clear, esta miniserie explora el poder de los hábitos atómicos y cómo implementarlos en tu vida diaria.",
		year: 2023,
		duration: "4 episodios",
		rating: 4.8,
		formats: ["Documental", "Animado", "Actores Reales"],
		categories: ["Desarrollo Personal", "Productividad"],
		episodes: [
			{ number: 1, title: "Los Fundamentos de los Hábitos", duration: "28 min" },
			{ number: 2, title: "Las Leyes del Cambio de Comportamiento", duration: "32 min" },
			{ number: 3, title: "Del Sistema a la Identidad", duration: "30 min" },
			{ number: 4, title: "Hábitos Avanzados y Aplicaciones", duration: "35 min" },
		],
		didYouKnow:
			"James Clear escribió Atomic Habits después de sufrir una grave lesión que le obligó a reconstruir su vida a través de pequeños hábitos diarios.",
	};

	return (
		<div className='min-h-screen bg-gray-950 text-white'>
			{/* Navigation */}
			<header className='fixed top-0 w-full z-50 bg-gradient-to-b from-gray-950/90 to-transparent'>
				<div className='container flex items-center py-4'>
					<Link href='/' className='flex items-center gap-2 text-white hover:text-fuchsia-400 transition'>
						<ChevronLeft className='h-5 w-5' />
						<span>Volver</span>
					</Link>
				</div>
			</header>
			{/* Hero Section */}
			<section className='relative pt-16'>
				<div className='relative h-[50vh]'>
					<Image
						src='https://hughesmarino.com/boston/wp-content/uploads/sites/20/Six-Takeaways-from-James-Clear-Featured-Image.jpg'
						alt={series.title}
						fill
						className='object-cover brightness-50'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent' />
					<div className='absolute bottom-0 left-0 right-0 p-6 flex items-end'>
						<Button size='lg' className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
							<Play className='mr-2 h-5 w-5' /> Reproducir
						</Button>
					</div>
				</div>
			</section>
			<div className='flex flex-col justify-center items-center'>
				{/* Content Section */}
				<section className='bg-gray-950 py-8'>
					<div className='container'>
						<div className='flex flex-col md:flex-row gap-8'>
							<div className='md:w-1/3 lg:w-1/4'>
								<Image
									src='/atomic-habits.png'
									alt={series.title}
									width={300}
									height={450}
									className='w-full rounded-lg object-cover aspect-[2/3]'
								/>
							</div>
							<div className='md:w-2/3 lg:w-3/4'>
								<div className='flex flex-wrap items-center gap-2 mb-4'>
									{series.categories.map((category) => (
										<Badge key={category} className='bg-fuchsia-600 text-white'>
											{category}
										</Badge>
									))}
									<span className='text-sm text-gray-200'>{series.year}</span>
									<span className='text-sm text-gray-200'>{series.duration}</span>
									<div className='flex items-center gap-1 ml-2'>
										<Star className='h-4 w-4 fill-yellow-500 text-yellow-500' />
										<span>{series.rating}</span>
									</div>
								</div>

								<h1 className='text-4xl font-bold mb-2'>{series.title}</h1>
								<p className='text-lg text-gray-200 mb-4'>Basado en el libro de {series.author}</p>

								<p className='text-gray-100 mb-6'>{series.description}</p>

								<div className='flex items-center gap-4 mb-8'>
									<Button variant='outline' size='sm' className='gap-2 text-black border-gray-600'>
										<Heart className='h-4 w-4' /> Favorito
									</Button>
									<Button variant='outline' size='sm' className='gap-2 text-black border-gray-600'>
										<Share2 className='h-4 w-4' /> Compartir
									</Button>
									<Button variant='outline' size='sm' className='gap-2 text-black border-gray-600'>
										<MessageSquare className='h-4 w-4' /> Comentar
									</Button>
								</div>

								<div className='bg-gray-900 p-4 rounded-lg mb-8'>
									<h4 className='text-lg font-semibold mb-2 flex items-center'>
										<span className='bg-yellow-500 text-black px-2 py-0.5 text-xs rounded mr-2'>¿SABÍAS QUÉ?</span>
										Datos curiosos
									</h4>
									<p className='text-gray-100'>{series.didYouKnow}</p>
								</div>

								<h2 className='text-2xl font-bold mb-4'>Formatos Disponibles</h2>
								<Tabs defaultValue='documentary' className='w-full mb-8'>
									<TabsList className='grid w-full grid-cols-3 mb-6 bg-gray-900'>
										<TabsTrigger
											value='documentary'
											className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
											<Play className='mr-2 h-5 w-5' /> Cine
										</TabsTrigger>
										<TabsTrigger value='animated' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
											<PopcornIcon className='mr-2 h-5 w-5' />
											Animado
										</TabsTrigger>
										<TabsTrigger
											value='live-action'
											className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
											<PaletteIcon className='mr-2 h-5 w-5' />
											Documental
										</TabsTrigger>
									</TabsList>
									<TabsContent value='documentary' className='space-y-4'>
										<div className='relative rounded-lg overflow-hidden'>
											<Image
												src='https://cdn.pixabay.com/photo/2013/01/20/14/08/shooting-75599_1280.jpg'
												alt='Documental'
												width={600}
												height={300}
												className='w-full object-cover rounded-lg'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
												<p className='text-gray-100 mb-4'>
													Un análisis profundo con entrevistas a expertos y visualizaciones de datos que explican los
													conceptos clave del libro.
												</p>
												<Button className='w-fit bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
													<Play className='mr-2 h-5 w-5' /> Ver este formato
												</Button>
											</div>
										</div>
									</TabsContent>
									<TabsContent value='animated' className='space-y-4'>
										<div className='relative rounded-lg overflow-hidden'>
											<Image
												src='https://cdn.pixabay.com/photo/2019/01/23/11/07/animation-3950055_1280.jpg'
												alt='Animado'
												width={600}
												height={300}
												className='w-full object-cover rounded-lg'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
												<p className='text-gray-100 mb-4'>
													Una versión animada que utiliza metáforas visuales y personajes para explicar los conceptos de
													forma entretenida.
												</p>
												<Button className='w-fit bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
													<Play className='mr-2 h-5 w-5' /> Ver este formato
												</Button>
											</div>
										</div>
									</TabsContent>
									<TabsContent value='live-action' className='space-y-4'>
										<div className='relative rounded-lg overflow-hidden'>
											<Image
												src='https://cdn.pixabay.com/photo/2015/09/28/13/48/auto-962083_1280.jpg'
												alt='Actores Reales'
												width={600}
												height={300}
												className='w-full object-cover rounded-lg'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
												<p className='text-gray-100 mb-4'>
													Una dramatización con actores que muestra historias de personas aplicando los hábitos atómicos en
													situaciones reales.
												</p>
												<Button className='w-fit bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
													<Play className='mr-2 h-5 w-5' /> Ver este formato
												</Button>
											</div>
										</div>
									</TabsContent>
								</Tabs>

								<h2 className='text-2xl font-bold mb-4'>Episodios</h2>
								<div className='space-y-4'>
									{series.episodes.map((episode) => (
										<div key={episode.number} className='bg-gray-900 p-4 rounded-lg flex items-center gap-4'>
											<div className='bg-fuchsia-600 rounded-full w-10 h-10 flex items-center justify-center font-bold'>
												{episode.number}
											</div>
											<div className='flex-1'>
												<h3 className='font-semibold'>{episode.title}</h3>
												<p className='text-sm text-gray-300'>{episode.duration}</p>
											</div>
											<Button variant='ghost' size='icon' className='text-white hover:bg-gray-800'>
												<Play className='h-5 w-5' />
											</Button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Related Content */}
				<section className='bg-gray-950 py-8'>
					<div className='container'>
						<h2 className='text-2xl font-bold mb-6'>Libros Relacionados</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<Link href={`/series/${item}`} key={item} className='group'>
									<div className='relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105'>
										<Image
											src='/images/atomic-habits.jpg'
											alt='Libro relacionado'
											width={180}
											height={250}
											className='w-full object-cover aspect-[2/3]'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3'>
											<h3 className='font-bold line-clamp-2 text-white'>Título del Libro</h3>
											<p className='text-sm text-gray-100'>Autor</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Community Section */}
				<section className='bg-gray-950 py-8 border-t border-gray-800'>
					<div className='container'>
						<div className='flex items-center justify-between mb-6'>
							<h2 className='text-2xl font-bold'>Discusiones de la Comunidad</h2>
							<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
								<BookOpen className='mr-2 h-5 w-5' /> Unirse al Club de Lectura
							</Button>
						</div>

						<div className='space-y-4'>
							{[1, 2, 3].map((item) => (
								<div key={item} className='bg-gray-900 p-4 rounded-lg'>
									<div className='flex items-center gap-3 mb-3'>
										<Image
											src={`/images/avatar${(item % 2) + 1}.jpg`}
											alt='Avatar'
											width={40}
											height={40}
											className='rounded-full'
										/>
										<div>
											<h4 className='font-semibold'>Usuario{item}</h4>
											<p className='text-xs text-gray-300'>Hace 2 días</p>
										</div>
									</div>
									<p className='text-gray-100 mb-3'>
										Me encantó cómo la serie explica el concepto de identidad basada en hábitos. ¿Alguien más ha intentado aplicar
										la regla del 1% de mejora?
									</p>
									<div className='flex items-center gap-4 text-sm text-gray-300'>
										<button className='flex items-center gap-1 hover:text-white'>
											<Heart className='h-4 w-4' /> 24
										</button>
										<button className='flex items-center gap-1 hover:text-white'>
											<MessageSquare className='h-4 w-4' /> 8 respuestas
										</button>
									</div>
								</div>
							))}
						</div>

						<div className='mt-6 text-center'>
							<Button variant='outline' className='text-white border-gray-700 hover:bg-gray-800'>
								Ver más discusiones
							</Button>
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className='bg-gray-950 border-t border-gray-800 py-10'>
				<div className='container'>
					<div className='flex flex-col md:flex-row justify-between'>
						<div className='mb-6 md:mb-0'>
							<p className='text-gray-300 max-w-md'>Transformando libros impactantes en experiencias visuales inmersivas.</p>
						</div>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Explorar</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/browse' className='hover:text-fuchsia-400'>
											Biblioteca
										</Link>
									</li>
									<li>
										<Link href='/categories' className='hover:text-fuchsia-400'>
											Categorías
										</Link>
									</li>
									<li>
										<Link href='/new' className='hover:text-fuchsia-400'>
											Novedades
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Comunidad</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/community' className='hover:text-fuchsia-400'>
											Club de Autores
										</Link>
									</li>
									<li>
										<Link href='/events' className='hover:text-fuchsia-400'>
											Eventos
										</Link>
									</li>
									<li>
										<Link href='/forum' className='hover:text-fuchsia-400'>
											Foro
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Soporte</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/help' className='hover:text-fuchsia-400'>
											Ayuda
										</Link>
									</li>
									<li>
										<Link href='/contact' className='hover:text-fuchsia-400'>
											Contacto
										</Link>
									</li>
									<li>
										<Link href='/faq' className='hover:text-fuchsia-400'>
											FAQ
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-300 text-sm'>
						<p>© 2025 MovieBooks. Todos los derechos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
