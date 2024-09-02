import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <header className="relative flex w-full items-center justify-between border-b-4 border-b-red-700 bg-black px-4 py-2">
                <h1 className="text-white">Bienvenido al módulo principal</h1>
                <p className="text-white">Alan</p>
                <div className="mt-4 flex flex-col items-center gap-y-4">
                <Link
                        key="Cerrar Sesión"
                        className="w-3/5 hover:scale-105 sm:w-1/4"
                        to="/login"
                    ><button className="group relative z-10 inline-flex h-11 select-none items-center justify-center overflow-hidden rounded-md border-2 border-solid px-6 py-0 text-black tracking-wide outline-0 duration-300 ease-in-out bg-white border-black group-hover:text-black focus:text-black group-hover:fill-black">Cerrar Sesión</button>
                </Link>
                </div>
            </header>
            <section className="flex flex-col">
                <h1 className="my-4 text-center text-2xl font-bold uppercase">
                    Secciones
                </h1>
                <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                    <Link
                        key="conferencistas"
                        className="w-3/5 hover:scale-105 sm:w-1/4"
                        to="/conferencistas"
                    >
                        <article className="rounded-2xl bg-black text-white">
                            <h2 className="p-1.5 text-center text-xl font-bold">
                                Conferencistas
                            </h2>
                            <img
                                className="rounded-b-2xl w-100 h-50"
                                src="../../public/conferencista.jpeg"
                                alt="conferencistas"
                            />
                        </article>
                    </Link>
                    <Link
                        key="Auditorios"
                        className="w-3/5 hover:scale-105 sm:w-1/4"
                        to="/auditorios"
                    >
                        <article className="rounded-2xl bg-black text-white">
                            <h2 className="p-1.5 text-center text-xl font-bold">
                                Auditorios
                            </h2>
                            <img
                                className="size-full rounded-b-2xl w-150 h-200"
                                src="../../public/auditorio.jpg"
                                alt="Auditorios"
                            />
                        </article>
                    </Link>
                    <Link
                        key="Reservas"
                        className="w-3/5 hover:scale-105 sm:w-1/4"
                        to="/reservas"
                    >
                        <article className="rounded-2xl bg-black text-white">
                            <h2 className="p-1.5 text-center text-xl font-bold">
                                Reservas
                            </h2>
                            <img
                                className="size-full rounded-b-2xl w-150 h-200"
                                src="../../public/Reserva.jpg"
                                alt="Reservas"
                            />
                        </article>
                    </Link>
                </div>
            </section>
        </>
    )
}