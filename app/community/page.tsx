import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Heart, MessageSquare, Sparkles, Users, Video } from "lucide-react";

export default function CommunityPage() {
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
			<section className='relative pt-24 pb-16 bg-gradient-to-b from-fuchsia-900/50 to-gray-950'>
				<div className='container mx-auto text-center flex flex-col items-center justify-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>Club de Autores</h1>
					<p className='text-xl text-gray-100 max-w-2xl mx-auto mb-8'>
						Únete a nuestra comunidad y conecta con personas que comparten tus intereses en desarrollo personal, innovación, negocios y
						ciencia.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
							<Users className='mr-2 h-5 w-5' /> Unirse a la Comunidad
						</Button>
						<Button variant='outline' className='border-white text-black hover:bg-white/20'>
							<Calendar className='mr-2 h-5 w-5' /> Ver Eventos
						</Button>
					</div>
				</div>
			</section>
			<div className='flex flex-col justify-center items-center'>
				{/* Stats Section */}
				<section className='py-12 bg-gray-950'>
					<div className='container'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
							<div className='bg-gray-900 p-6 rounded-lg'>
								<p className='text-3xl font-bold text-fuchsia-400 mb-2'>15K+</p>
								<p className='text-gray-100'>Miembros</p>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg'>
								<p className='text-3xl font-bold text-fuchsia-400 mb-2'>200+</p>
								<p className='text-gray-100'>Clubes de Lectura</p>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg'>
								<p className='text-3xl font-bold text-fuchsia-400 mb-2'>50+</p>
								<p className='text-gray-100'>Eventos Mensuales</p>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg'>
								<p className='text-3xl font-bold text-fuchsia-400 mb-2'>5K+</p>
								<p className='text-gray-100'>Discusiones Activas</p>
							</div>
						</div>
					</div>
				</section>

				{/* Main Content */}
				<section className='py-12 bg-gray-950'>
					<div className='container'>
						<Tabs defaultValue='discussions' className='w-full'>
							<TabsList className='grid w-full grid-cols-3 mb-8 bg-gray-900'>
								<TabsTrigger value='discussions' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
									Discusiones
								</TabsTrigger>
								<TabsTrigger value='events' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
									Eventos
								</TabsTrigger>
								<TabsTrigger value='clubs' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
									Clubes de Lectura
								</TabsTrigger>
							</TabsList>

							<TabsContent value='discussions' className='space-y-6'>
								<div className='flex justify-between items-center mb-6'>
									<h2 className='text-2xl font-bold'>Discusiones Populares</h2>
									<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
										<MessageSquare className='mr-2 h-5 w-5' /> Nueva Discusión
									</Button>
								</div>

								<div className='space-y-4'>
									{[1, 2, 3, 4, 5].map((item) => (
										<Card key={item} className='bg-gray-900 border-gray-800'>
											<CardHeader>
												<div className='flex justify-between items-start'>
													<div className='flex items-center gap-3'>
														<Image
															src={`/images/avatar${(item % 2) + 1}.jpg`}
															alt='Avatar'
															width={40}
															height={40}
															className='rounded-full'
														/>
														<div>
															<h4 className='font-semibold'>Usuario{item}</h4>
															<p className='text-xs text-gray-300'>Hace 3 días</p>
														</div>
													</div>
													<Badge className='bg-fuchsia-600 text-white'>
														{["Desarrollo Personal", "Negocios", "Innovación", "Ciencia", "Liderazgo"][item % 5]}
													</Badge>
												</div>
												<CardTitle className='text-lg text-white'>
													¿Cómo aplicar los conceptos de "Atomic Habits" en el entorno laboral?
												</CardTitle>
												<CardDescription className='text-gray-100'>
													He estado viendo la miniserie y me gustaría saber cómo otros están implementando estos conceptos
													en sus trabajos...
												</CardDescription>
											</CardHeader>
											<CardFooter className='border-t border-gray-800 pt-4'>
												<div className='flex items-center gap-4 text-sm text-gray-300'>
													<button className='flex items-center gap-1 hover:text-white'>
														<Heart className='h-4 w-4' /> 42
													</button>
													<button className='flex items-center gap-1 hover:text-white'>
														<MessageSquare className='h-4 w-4' /> 18 respuestas
													</button>
													<span className='flex items-center gap-1'>
														<BookOpen className='h-4 w-4' /> Atomic Habits
													</span>
												</div>
											</CardFooter>
										</Card>
									))}
								</div>

								<div className='text-center mt-8'>
									<Button variant='outline' className='border-gray-700 hover:bg-gray-800 text-white'>
										Cargar más discusiones
									</Button>
								</div>
							</TabsContent>

							<TabsContent value='events' className='space-y-6'>
								<div className='flex justify-between items-center mb-6'>
									<h2 className='text-2xl font-bold'>Próximos Eventos</h2>
									<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
										<Calendar className='mr-2 h-5 w-5' /> Ver Calendario
									</Button>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{[1, 2, 3, 4, 5, 6].map((item) => (
										<Card key={item} className='bg-gray-900 border-gray-800'>
											<CardHeader>
												<div className='mb-3'>
													<Badge className='bg-fuchsia-600 text-white'>
														{["Charla", "Debate", "Entrevista", "Taller", "Club de Lectura", "Q&A"][item % 6]}
													</Badge>
												</div>
												<CardTitle className='text-lg text-white'>
													Entrevista con{" "}
													{
														[
															"James Clear",
															"Simon Sinek",
															"Daniel Kahneman",
															"Ray Dalio",
															"Yuval Noah Harari",
															"Angela Duckworth",
														][item % 6]
													}
												</CardTitle>
												<CardDescription className='text-gray-100'>
													{["15", "18", "20", "22", "25", "28"][item % 6]} de Mayo, 2025 • 19:00 - 20:30
												</CardDescription>
											</CardHeader>
											<CardContent>
												<p className='text-gray-100 text-sm'>
													Únete a esta sesión exclusiva donde discutiremos los conceptos clave de su libro y responderemos
													preguntas de la comunidad.
												</p>
											</CardContent>
											<CardFooter className='border-t border-gray-800 pt-4'>
												<div className='flex items-center justify-between w-full'>
													<span className='text-sm text-gray-300 flex items-center gap-1'>
														<Users className='h-4 w-4' /> 230 asistentes
													</span>
													<Button size='sm' className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
														Reservar
													</Button>
												</div>
											</CardFooter>
										</Card>
									))}
								</div>

								<div className='text-center mt-8'>
									<Button variant='outline' className='border-gray-700 hover:bg-gray-800 text-white'>
										Ver todos los eventos
									</Button>
								</div>
							</TabsContent>

							<TabsContent value='clubs' className='space-y-6'>
								<div className='flex justify-between items-center mb-6'>
									<h2 className='text-2xl font-bold'>Clubes de Lectura Populares</h2>
									<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
										<BookOpen className='mr-2 h-5 w-5' /> Crear Club
									</Button>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{[1, 2, 3, 4, 5, 6].map((item) => (
										<Card key={item} className='bg-gray-900 border-gray-800'>
											<CardHeader>
												<div className='flex justify-between items-start'>
													<div className='flex items-center gap-3'>
														<div className='bg-fuchsia-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl'>
															{["DP", "IN", "NE", "CI", "LI", "PS"][item % 6]}
														</div>
														<div>
															<CardTitle className='text-lg text-white'>
																{
																	[
																		"Hábitos Atómicos",
																		"Innovadores",
																		"Líderes Empresariales",
																		"Mentes Científicas",
																		"Psicología Práctica",
																		"Filosofía Moderna",
																	][item % 6]
																}
															</CardTitle>
															<p className='text-xs text-gray-300'>Creado por Usuario{item}</p>
														</div>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className='text-gray-100 text-sm mb-3'>
													Club dedicado a discutir libros sobre{" "}
													{
														["desarrollo personal", "innovación", "negocios", "ciencia", "liderazgo", "psicología"][
															item % 6
														]
													}{" "}
													y su aplicación práctica.
												</p>
												<div className='flex items-center gap-2 text-sm text-gray-300'>
													<span className='flex items-center gap-1'>
														<Users className='h-4 w-4' /> {[156, 89, 210, 75, 124, 98][item % 6]} miembros
													</span>
													<span className='flex items-center gap-1'>
														<BookOpen className='h-4 w-4' /> {[12, 8, 15, 6, 10, 9][item % 6]} libros
													</span>
													<span className='flex items-center gap-1'>
														<Video className='h-4 w-4' /> {[8, 5, 10, 4, 7, 6][item % 6]} series
													</span>
												</div>
											</CardContent>
											<CardFooter className='border-t border-gray-800 pt-4'>
												<Button className='w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>Unirse al Club</Button>
											</CardFooter>
										</Card>
									))}
								</div>

								<div className='text-center mt-8'>
									<Button variant='outline' className='border-gray-700 hover:bg-gray-800 text-white'>
										Ver todos los clubes
									</Button>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</section>

				{/* Testimonials */}
				<section className='py-12 bg-gradient-to-b from-gray-950 to-fuchsia-950/30'>
					<div className='container'>
						<h2 className='text-2xl font-bold mb-8 text-center'>Lo que dicen nuestros miembros</h2>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{[
								{
									name: "María García",
									image: "https://i.pravatar.cc/150?img=1",
									since: "Miembro desde 2023",
									testimonial:
										"La comunidad de MovieBooks ha transformado mi experiencia de aprendizaje. Las discusiones después de ver las miniseries me ayudan a profundizar en los conceptos y aplicarlos en mi vida diaria.",
								},
								{
									name: "Juan Pérez",
									image: "https://i.pravatar.cc/150?img=3",
									since: "Miembro desde 2024",
									testimonial:
										"Los clubes de lectura son increíbles. He conocido a personas con intereses similares y hemos formado un grupo que se reúne virtualmente cada semana para discutir nuevos conceptos.",
								},
								{
									name: "Laura Sánchez",
									image: "https://i.pravatar.cc/150?img=5",
									since: "Miembro desde 2022",
									testimonial:
										"Los eventos con autores son mi parte favorita. Poder hacer preguntas directamente a los creadores del contenido que consumimos es una experiencia única que no encontrarías en otras plataformas.",
								},
							].map((testimonial, index) => (
								<Card key={index} className='bg-gray-900/50 border-gray-800'>
									<CardHeader>
										<div className='flex items-center gap-3'>
											<Image
												src={testimonial.image}
												alt={`Avatar de ${testimonial.name}`}
												width={48}
												height={48}
												className='rounded-full'
											/>
											<div>
												<h4 className='font-semibold text-white'>{testimonial.name}</h4>
												<p className='text-xs text-gray-300'>{testimonial.since}</p>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<p className='text-gray-100 italic'>{testimonial.testimonial}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-16 bg-fuchsia-900/20'>
					<div className='container text-center'>
						<h2 className='text-3xl font-bold mb-4'>¿Listo para unirte a nuestra comunidad?</h2>
						<p className='text-xl text-gray-100 max-w-2xl mx-auto mb-8'>
							Conéctate con personas que comparten tus intereses y lleva tu experiencia de aprendizaje al siguiente nivel.
						</p>
						<div className='flex flex-wrap justify-center gap-4'>
							<Button size='lg' className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
								Unirse Ahora
							</Button>
							<Button size='lg' variant='outline' className='border-white text-white hover:bg-white/20'>
								Explorar Más
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
							<Link href='/' className='flex items-center gap-2 text-xl font-bold mb-4'>
								<Sparkles className='h-5 w-5 text-fuchsia-500' />
								<span>MovieBooks</span>
							</Link>
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
