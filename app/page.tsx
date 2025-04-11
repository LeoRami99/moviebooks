import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import FeaturedSeries from "@/components/featured-series";
import SeriesRow from "@/components/series-row";

export default function Home() {
	return (
		<div className='min-h-screen bg-gray-950 text-white'>
			{/* Navigation */}
			<div className='flex justify-center w-full'>
				<header className='fixed top-0 w-full z-50 bg-gradient-to-b from-gray-950/90 to-transparent'>
					<div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-8'>
						<div className='flex items-center gap-8'>
							<Link href='/' className='flex items-center gap-2 text-2xl font-bold'>
								<Image src={"moviebook.png"} alt='Logo' width={40} height={40} className='size-[80px]' />
								{/* <span>MovieBooks</span> */}
							</Link>
							<nav className='hidden md:flex items-center gap-6'>
								<Link href='/browse' className='hover:text-fuchsia-400 transition'>
									Explorar
								</Link>
								<Link href='/categories' className='hover:text-fuchsia-400 transition'>
									Categorías
								</Link>
								<Link href='/community' className='hover:text-fuchsia-400 transition'>
									Comunidad
								</Link>
								<Link href='/my-list' className='hover:text-fuchsia-400 transition'>
									Mi Lista
								</Link>
							</nav>
						</div>
						<div className='flex items-center gap-4'>
							<Link href='/search' className='hover:text-fuchsia-400 transition'>
								Buscar
							</Link>
							<Link href='/plans' className='hover:text-fuchsia-400 transition'>
								Planes
							</Link>
							<Button asChild size='sm' variant='ghost' className='rounded-full'>
								<Link href='/profile'>
									<div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='text-white'>
											<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
											<circle cx='12' cy='7' r='4'></circle>
										</svg>
									</div>
								</Link>
							</Button>
						</div>
					</div>
				</header>
			</div>

			{/* Hero Section */}
			<section className='relative h-screen p-4'>
				<Image
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OQilsUrl7J0u7F3n4hOistjp1d5LfizV4Q&s'
					alt='Featured Series'
					fill
					className='object-cover brightness-50'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent' />
				<div className='container relative h-full flex flex-col justify-end pb-20 pt-40 px-20'>
					<div className='max-w-2xl space-y-4'>
						<div className='flex items-center gap-2'>
							<span className='bg-fuchsia-600 text-white px-2 py-0.5 text-sm rounded'>NUEVO</span>
							<span className='text-sm text-gray-200'>Basado en el bestseller de Simon Sinek</span>
						</div>
						<h1 className='text-5xl font-bold'>Start With Why</h1>
						<p className='text-lg text-gray-100'>
							Descubre cómo los grandes líderes inspiran acción a través del poder del propósito en esta cautivadora miniserie.
						</p>
						<div className='flex items-center gap-4 pt-4'>
							<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
								<Play className='mr-2 h-5 w-5' /> Reproducir
							</Button>
							<Button variant='outline' className='border-white text-black hover:bg-white/20'>
								Más información
							</Button>
						</div>
					</div>
				</div>
			</section>
			<div className='flex flex-col justify-center items-center'>
				{/* Content Sections */}
				<section className='bg-gray-950 py-10'>
					<div className='container space-y-12'>
						<FeaturedSeries />

						<div>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-2xl font-bold'>Desarrollo Personal</h2>
								<Link href='/category/personal-development' className='flex items-center text-sm text-fuchsia-400 hover:underline'>
									Ver todos <ChevronRight className='h-4 w-4' />
								</Link>
							</div>
							<SeriesRow category='personal-development' />
						</div>

						<div>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-2xl font-bold'>Innovación</h2>
								<Link href='/category/innovation' className='flex items-center text-sm text-fuchsia-400 hover:underline'>
									Ver todos <ChevronRight className='h-4 w-4' />
								</Link>
							</div>
							<SeriesRow category='innovation' />
						</div>

						<div>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-2xl font-bold'>Negocios</h2>
								<Link href='/category/business' className='flex items-center text-sm text-fuchsia-400 hover:underline'>
									Ver todos <ChevronRight className='h-4 w-4' />
								</Link>
							</div>
							<SeriesRow category='business' />
						</div>

						<div>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-2xl font-bold'>Ciencia</h2>
								<Link href='/category/science' className='flex items-center text-sm text-fuchsia-400 hover:underline'>
									Ver todos <ChevronRight className='h-4 w-4' />
								</Link>
							</div>
							<SeriesRow category='science' />
						</div>
					</div>
				</section>

				{/* Community Section */}
				<section className='py-16 bg-gradient-to-b from-gray-950 to-fuchsia-950'>
					<div className='container'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>Club de Autores</h2>
							<p className='text-gray-100 max-w-2xl mx-auto'>
								Únete a nuestra comunidad y conecta con personas que comparten tus intereses. Participa en discusiones, eventos
								exclusivos y más.
							</p>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='bg-gray-900 p-6 rounded-lg border border-fuchsia-800'>
								<h3 className='text-xl font-bold mb-3'>Discusiones</h3>
								<p className='text-gray-100 mb-4'>
									Comparte tus ideas y participa en conversaciones sobre tus libros y series favoritas.
								</p>
								<Button variant='outline' className='w-full border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950/50'>
									Unirse
								</Button>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg border border-fuchsia-800'>
								<h3 className='text-xl font-bold mb-3'>Eventos en vivo</h3>
								<p className='text-gray-100 mb-4'>Asiste a charlas virtuales con autores y creadores de contenido exclusivo.</p>
								<Button variant='outline' className='w-full border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950/50'>
									Calendario
								</Button>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg border border-fuchsia-800'>
								<h3 className='text-xl font-bold mb-3'>Reseñas</h3>
								<p className='text-gray-100 mb-4'>
									Comparte tus opiniones y descubre recomendaciones de otros miembros de la comunidad.
								</p>
								<Button variant='outline' className='w-full border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950/50'>
									Explorar
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Subscription Plans */}
				<div className='flex flex-col justify-center items-center'>
					<section className='py-16 bg-gray-950'>
						<div className='container'>
							<div className='text-center mb-12'>
								<h2 className='text-3xl font-bold mb-4'>Planes de Suscripción</h2>
								<p className='text-gray-100 max-w-2xl mx-auto'>
									Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de nuestro contenido.
								</p>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
								<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
									<div className='text-center mb-6'>
										<h3 className='text-xl font-bold mb-2'>Lectobasic</h3>
										<p className='text-3xl font-bold'>Gratis</p>
									</div>
									<ul className='space-y-3 mb-6'>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Acceso limitado a la biblioteca
										</li>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Formato estándar
										</li>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Con publicidad
										</li>
										<li className='flex items-center text-gray-400'>
											<span className='text-red-500 mr-2'>✗</span> Sin acceso a la comunidad
										</li>
									</ul>
									<Button variant='outline' className='w-full text-black'>
										Comenzar
									</Button>
								</div>
								<div className='bg-fuchsia-900 p-6 rounded-lg border border-fuchsia-700 transform scale-105 shadow-xl'>
									<div className='text-center mb-6'>
										<span className='bg-fuchsia-600 text-white px-2 py-0.5 text-sm rounded'>POPULAR</span>
										<h3 className='text-xl font-bold mt-2 mb-2'>Lectochill</h3>
										<p className='text-3xl font-bold'>
											$29.900<span className='text-sm font-normal'>/mes</span>
										</p>
									</div>
									<ul className='space-y-3 mb-6'>
										<li className='flex items-center'>
											<span className='text-green-400 mr-2'>✓</span> Acceso completo a la biblioteca
										</li>
										<li className='flex items-center'>
											<span className='text-green-400 mr-2'>✓</span> Todos los formatos disponibles
										</li>
										<li className='flex items-center'>
											<span className='text-green-400 mr-2'>✓</span> Sin publicidad
										</li>
										<li className='flex items-center text-gray-400'>
											<span className='text-red-500 mr-2'>✗</span> Sin acceso a la comunidad
										</li>
									</ul>
									<Button className='w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>Suscribirse</Button>
								</div>
								<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
									<div className='text-center mb-6'>
										<h3 className='text-xl font-bold mb-2'>Lectófilo</h3>
										<p className='text-3xl font-bold'>
											$59.900<span className='text-sm font-normal'>/mes</span>
										</p>
									</div>
									<ul className='space-y-3 mb-6'>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Todo lo de Premium
										</li>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Hasta 5 perfiles
										</li>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Descargas para ver sin conexión
										</li>
										<li className='flex items-center'>
											<span className='text-green-500 mr-2'>✓</span> Eventos exclusivos
										</li>
										<li className='flex items-center'>
											<span className='text-green-400 mr-2'>✓</span> Acceso a la comunidad
										</li>
									</ul>
									<Button variant='outline' className='w-full text-black'>
										Suscribirse
									</Button>
								</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className='py-16 bg-gradient-to-b from-gray-950 to-fuchsia-950/30'>
						<div className='container text-center'>
							<h2 className='text-3xl font-bold mb-4'>¿Listo para transformar tu experiencia de aprendizaje?</h2>
							<p className='text-xl text-gray-100 max-w-2xl mx-auto mb-8'>
								Únete a miles de personas que están descubriendo una nueva forma de consumir conocimiento.
							</p>
							<Button size='lg' className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
								Comenzar Ahora
							</Button>
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
		</div>
	);
}
