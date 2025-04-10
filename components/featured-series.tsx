import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, PaletteIcon, Play, PopcornIcon } from "lucide-react";

export default function FeaturedSeries() {
	return (
		<div className='mb-12'>
			<h2 className='text-2xl font-bold mb-6'>Formatos Disponibles</h2>
			<Tabs defaultValue='documentary' className='w-full'>
				<TabsList className='grid w-full grid-cols-3 mb-6 bg-gray-900'>
					<TabsTrigger value='documentary' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
						<Play className='mr-2 h-5 w-5' /> Cine
					</TabsTrigger>
					<TabsTrigger value='animated' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
						<PopcornIcon className='mr-2 h-5 w-5' /> Animado
					</TabsTrigger>
					<TabsTrigger value='live-action' className='data-[state=active]:bg-fuchsia-700 data-[state=active]:text-white'>
						<PaletteIcon className='mr-2 h-5 w-5' />
						Documental
					</TabsTrigger>
				</TabsList>
				<TabsContent value='documentary' className='space-y-4'>
					<div className='relative rounded-lg overflow-hidden'>
						<Image
							src='https://cdn.pixabay.com/photo/2013/01/20/14/08/shooting-75599_1280.jpg'
							alt='Documental'
							width={800}
							height={400}
							className='w-full object-cover rounded-lg'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
							<h3 className='text-2xl font-bold mb-2'>Atomic Habits: El Poder de los Hábitos Atómicos</h3>
							<p className='text-gray-100 mb-4 max-w-2xl'>
								Un análisis profundo de cómo pequeños cambios generan resultados extraordinarios, basado en el bestseller de James
								Clear.
							</p>
							<div className='flex items-center gap-4'>
								<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
									<Play className='mr-2 h-5 w-5' /> Reproducir
								</Button>
								<Button variant='outline' className='border-white text-black hover:bg-white/20'>
									<Info className='mr-2 h-5 w-5 text-black' /> Detalles
								</Button>
							</div>
						</div>
					</div>
					<div className='bg-gray-900 p-4 rounded-lg'>
						<h4 className='text-lg font-semibold mb-2 flex items-center'>
							<span className='bg-yellow-500 text-black px-2 py-0.5 text-xs rounded mr-2'>¿SABÍAS QUÉ?</span>
							Datos curiosos
						</h4>
						<p className='text-gray-100'>
							James Clear tardó más de 5 años en investigar y desarrollar el sistema de hábitos atómicos, entrevistando a más de 100
							expertos en psicología del comportamiento.
						</p>
					</div>
				</TabsContent>
				<TabsContent value='animated' className='space-y-4'>
					<div className='relative rounded-lg overflow-hidden'>
						<Image
							src='https://cdn.pixabay.com/photo/2019/01/23/11/07/animation-3950055_1280.jpg'
							alt='Animado'
							width={800}
							height={400}
							className='w-full object-cover rounded-lg'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
							<h3 className='text-2xl font-bold mb-2'>Sapiens: Una Historia Animada</h3>
							<p className='text-gray-100 mb-4 max-w-2xl'>
								Un viaje visual a través de la historia de la humanidad, basado en el revolucionario libro de Yuval Noah Harari.
							</p>
							<div className='flex items-center gap-4'>
								<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
									<Play className='mr-2 h-5 w-5' /> Reproducir
								</Button>
								<Button variant='outline' className='border-white text-black hover:bg-white/20'>
									<Info className='mr-2 h-5 w-5' /> Detalles
								</Button>
							</div>
						</div>
					</div>
					<div className='bg-gray-900 p-4 rounded-lg'>
						<h4 className='text-lg font-semibold mb-2 flex items-center'>
							<span className='bg-yellow-500 text-black px-2 py-0.5 text-xs rounded mr-2'>¿SABÍAS QUÉ?</span>
							Datos curiosos
						</h4>
						<p className='text-gray-100'>
							La versión animada de Sapiens utiliza más de 10,000 ilustraciones generadas por IA, supervisadas por un equipo de
							historiadores para garantizar su precisión.
						</p>
					</div>
				</TabsContent>
				<TabsContent value='live-action' className='space-y-4'>
					<div className='relative rounded-lg overflow-hidden'>
						<Image
							src='https://cdn.pixabay.com/photo/2015/09/28/13/48/auto-962083_1280.jpg'
							alt='Actores Reales'
							width={800}
							height={400}
							className='w-full object-cover rounded-lg'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent flex flex-col justify-end p-6'>
							<h3 className='text-2xl font-bold mb-2'>Pensar Rápido, Pensar Despacio</h3>
							<p className='text-gray-100 mb-4 max-w-2xl'>
								Una dramatización de los conceptos de Daniel Kahneman sobre cómo tomamos decisiones y los sesgos cognitivos que nos
								afectan.
							</p>
							<div className='flex items-center gap-4'>
								<Button className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
									<Play className='mr-2 h-5 w-5' /> Reproducir
								</Button>
								<Button variant='outline' className='border-white text-black hover:bg-white/20'>
									<Info className='mr-2 h-5 w-5 text-black' /> Detalles
								</Button>
							</div>
						</div>
					</div>
					<div className='bg-gray-900 p-4 rounded-lg'>
						<h4 className='text-lg font-semibold mb-2 flex items-center'>
							<span className='bg-yellow-500 text-black px-2 py-0.5 text-xs rounded mr-2'>¿SABÍAS QUÉ?</span>
							Datos curiosos
						</h4>
						<p className='text-gray-100'>
							Los actores de esta miniserie fueron seleccionados mediante un algoritmo de IA que analizó más de 10,000 audiciones
							virtuales para encontrar el elenco perfecto.
						</p>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
