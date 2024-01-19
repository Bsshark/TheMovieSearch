import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useAuthStore } from "../hooks/useAuthStore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerValidationSchema } from "../helpers/validationSchemas";
import { RegisterUser } from "../interfaces/AuthInterfaces";
import { FormProps } from "../interfaces/helperInterfaces";
import { useAppDispatch } from "../hooks/dispatch";


export const RegisterForm = ({toggleShowForm}: FormProps) => {
	const { startRegister } = useAuthStore();

	const dispatch = useAppDispatch();


	const handleRegister = ({displayName, email, password }: RegisterUser) => {
		dispatch(startRegister({displayName, email, password}));
	};

	return (
		<>
			<Formik
				initialValues={{displayName: "", email: "", password: "" , passwordConfirm: ""}}
				validationSchema={registerValidationSchema}
				onSubmit={handleRegister}
			>
				{({ errors, touched }) => (
					<Form className="sm:w-2/3 w-11/12 lg:w-1/3 h-fit rounded-md bg-gradient-to-r from-red-500 to-yellow-500 bg-gray-900 p-1">
						<div className="xl:px-10 px-3 py-10 flex flex-col xl:flex-wrap h-full w-full bg-gray-800 text-white justify-center">
							<div className="">
								<h2 className="w-full xl:text-xl font-semibold xl:leading-10 sm:leading-4 text-center">
									Registro
								</h2>
							</div>
                            <div className="w-full xl:py-3 py-1 h-">
								<div className="w-full">
									<label htmlFor="name">
										Nombre{" "}
										{touched.displayName && errors.displayName ? (
											<span className="text-red-500 text-xs font-sans">
												<FontAwesomeIcon
													size="xs"
													color="red"
													icon={faCircleExclamation}
												/>{" "}
												<ErrorMessage name="displayName" className="text-red-500" />
											</span>
										) : (
											""
										)}
									</label>
								</div>
								<div className="w-full">
									<Field
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline ${
											touched.displayName && errors.displayName
												? "outline-red-500"
												: "focus:outline-yellow-300"
										} `}
										id="displayName"
										name="displayName"
										type="text"
										placeholder="Nombre"
									/>
								</div>
							</div>
							<div className="w-full xl:py-3 py-1 h-">
								<div className="w-full">
									<label htmlFor="email">
										Correo{" "}
										{touched.email && errors.email ? (
											<span className="text-red-500 text-xs font-sans">
												<FontAwesomeIcon
													size="xs"
													color="red"
													icon={faCircleExclamation}
												/>{" "}
												<ErrorMessage name="email" className="text-red-500" />
											</span>
										) : (
											""
										)}
									</label>
								</div>
								<div className="w-full">
									<Field
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline ${
											touched.email && errors.email
												? "outline-red-500"
												: "focus:outline-yellow-300"
										} `}
										id="email"
										name="email"
										type="text"
										placeholder="Correo"
									/>
								</div>
							</div>
							<div className="w-full xl:py-3 py-2">
								<div className="w-full">
									<label htmlFor="password">
										Contraseña{" "}
										{touched.password && errors.password ? (
											<span className="text-red-500 text-xs font-sans">
												<FontAwesomeIcon
													size="xs"
													color="red"
													icon={faCircleExclamation}
												/>{" "}
												<ErrorMessage
													name="password"
													className="text-red-500"
												/>
											</span>
										) : (
											""
										)}
									</label>
								</div>
								<div className="w-full ">
									<Field
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline ${
											touched.password && errors.password
												? "outline-red-500"
												: "focus:outline-yellow-300"
										} `}
										id="password"
										type="password"
										name="password"
										placeholder="Contraseña"
									/>
								</div>
							</div>
                            <div className="w-full xl:py-3 py-2">
								<div className="w-full">
									<label htmlFor="passwordConfirm">
										Repita contraseña{" "}
										{touched.passwordConfirm && errors.passwordConfirm ? (
											<span className="text-red-500 text-xs font-sans">
												<FontAwesomeIcon
													size="xs"
													color="red"
													icon={faCircleExclamation}
												/>{" "}
												<ErrorMessage
													name="passwordConfirm"
													className="text-red-500"
												/>
											</span>
										) : (
											""
										)}
									</label>
								</div>
								<div className="w-full ">
									<Field
										className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline ${
											touched.passwordConfirm && errors.passwordConfirm
												? "outline-red-500"
												: "focus:outline-yellow-300"
										} `}
										id="passwordConfirm"
										type="password"
										name="passwordConfirm"
										placeholder="Contraseña"
									/>
								</div>
							</div>
							<div className="w-full flex  xl:py-3 py-2">
								<div className="w-1/2 flex items-center">
									<button
										type="submit"
										className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 transition ease-in-out hover:scale-105 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
									>
										Crear cuenta
									</button>
								</div>
							</div>
							<div className="w-full">
								¿Ya tienes cuenta?{" "}
								<a onClick={toggleShowForm} className="no-underline hover:underline">
									Logéate <FontAwesomeIcon icon={faAddressCard} />
								</a>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
