import { ChangeEvent, FormEvent, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import 'daisyui/dist/full.css';

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    country: string;
    phone: string;
    photo: FileList;
}

const countries = [
    "Argentina", "Bolivia", "Brasil", "Chile", "Colombia",
    "Ecuador", "Guyana", "Paraguay", "Perú", "Surinam",
    "Uruguay", "Venezuela"
];

const Formulario: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const password = watch('password');


    const onSubmit: SubmitHandler<FormData> = async (data) => {

        // Convertir la foto a base64
        let base64Photo = '';
        const file = data.photo[0];
        if (file) {
            base64Photo = await toBase64(file);
        }

        // Crear el objeto con los datos del formulario
        const dataToSend = {
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            name: data.name,
            country: data.country,
            phone: data.phone,
            photo: {
                base64: base64Photo,
                name: file.name,
                type: file.type,
                size: file.size
            }
        };

        // Enviar la solicitud POST a la API
        try {
            const response = await fetch('https://leonardojose.dev/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            console.log('Form data submitted:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

    return (
        <div className="App container mx-auto p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full mx-auto">
                <h2 className="text-2xl font-bold mb-4">Datos de Acceso</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        {...register('email', { required: "Email es requerido" })}
                        className="input input-bordered w-full"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Clave:</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: "Clave es requerida",
                            minLength: { value: 8, message: "La clave debe tener al menos 8 caracteres" },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: "La clave debe contener al menos un número y un caracter especial"
                            }
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Confirmar Clave:</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: "Confirmar clave es requerido",
                            validate: (value: String) => value === password || "Las claves no coinciden"
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                </div>
                <h2 className="text-2xl font-bold mb-4">Datos Personales</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Nombre:</label>
                    <input
                        type="text"
                        {...register('name', { required: "Nombre es requerido" })}
                        className="input input-bordered w-full"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">País:</label>
                    <select
                        {...register('country', { required: "País es requerido" })}
                        className="select select-bordered w-full"
                    >
                        <option value="">Seleccione un país</option>
                        {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Teléfono:</label>

                    <input
                        type="tel"
                        {...register('phone', {
                            required: "Teléfono es requerido",
                            pattern: {
                                value: /^[0-9()-]+$/,
                                message: "Solo se permiten números, paréntesis y guiones"
                            }
                        })}
                        className="input input-bordered w-full"
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Foto:</label>
                    <input
                        type="file"
                        {...register('photo', {
                            required: "Foto es requerida",
                            validate: {
                                acceptedFormats: files => files[0] && ['image/jpeg', 'image/png'].includes(files[0]?.type) || "Solo se permiten fotos en formato PNG o JPG"
                            }
                        })}
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                    />
                    {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary w-full">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;