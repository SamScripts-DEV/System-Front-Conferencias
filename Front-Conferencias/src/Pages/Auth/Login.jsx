import React from "react";

export default function Login() {
    return (
        <div className="flex w-full h-screen items-center justify-center py-4">
            <div className="flex w-full sm:w-2/3">
                <div className="w-1/2 flex items-center justify-center">
                    <img className="h-150" src="../../public/conferencista.jpeg" alt="conferencista" />
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <h1 className="mb-7 mt-2 text-center text-2xl font-semibold uppercase">
                        Iniciar Sesión
                    </h1>
                    <form className="flex flex-col items-center">
                        <div className="mb-4 flex w-full flex-col gap-y-4">
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="text-md peer w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 invalid:border-pink-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:invalid:border-pink-700 focus:invalid:ring-pink-700 focus:invalid:ring-opacity-50"
                                    placeholder="Ingrese su correo electrónico"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="text-md peer w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 invalid:border-pink-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:invalid:border-pink-700 focus:invalid:ring-pink-700 focus:invalid:ring-opacity-50"
                                    placeholder="Ingrese su contraseña"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-y-4">
                            <button className="group relative z-10 inline-flex h-11 select-none items-center justify-center overflow-hidden rounded-md border-2 border-solid px-6 py-0 text-white tracking-wide outline-0 duration-300 ease-in-out bg-black border-black group-hover:text-black focus:text-black group-hover:fill-black">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}