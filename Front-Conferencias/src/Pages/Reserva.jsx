export default function Reserva() {
    return (
        <>
            <header className="relative flex w-full items-center justify-between border-b-4 border-b-red-700 bg-black px-4 py-2">
                <h1 className="text-white">Bienvenido al módulo de reserva</h1>
                <p className="text-white">Alan</p>
                <div className="mt-4 flex flex-col items-start gap-y-4"> {/* Modified line */}
                    <button className="group relative z-10 inline-flex h-11 select-none items-center justify-center overflow-hidden rounded-md border-2 border-solid px-6 py-0 text-black tracking-wide outline-0 duration-300 ease-in-out bg-white border-black group-hover:text-black focus:text-black group-hover:fill-black">Cerrar Sesión</button>
                </div>
            </header>
            <main>
                <div className="mt-4 flex flex-col items-center gap-y-4">
                    <button className="group relative z-10 inline-flex h-11 select-none items-center justify-center overflow-hidden rounded-md border-2 border-solid px-6 py-0 text-white tracking-wide outline-0 duration-300 ease-in-out bg-black border-black group-hover:text-black focus:text-black group-hover:fill-black">Añadir reserva</button>
                </div>
            </main>
        </>
    )
}