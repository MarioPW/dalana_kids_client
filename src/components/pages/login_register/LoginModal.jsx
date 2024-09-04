import axios from "axios";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserServices } from "../../../services/users";
import { useUserContext } from "../../../context/UserContext";

export function LoginModal() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

  const { setToken, setButtonText, buttonText, userEmail, setUserEmail, password, setUserPassword } = useUserContext()
  const service = new UserServices()

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setUserEmail(e.target.value)
    } else if (e.target.id === "password") {
      setUserPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buttonText == "Ingresar") {
      const response = await service.login(userEmail, password)
      if (response) {
        setToken(response)
        setOpenModal(false)
      } else {
        console.log("User or password not found: ", response.status)
      }
      setButtonText("Salir")
    } else {
      setButtonText("Ingresar")
      service.logout()
    }
  }
  return (
    <>
      <Button className="bg-blue-500" onClick={buttonText === "Ingresar" ? () => setOpenModal(true) : handleSubmit}>{buttonText}</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Iniciar Sesión</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Correo" />
                </div>
                <TextInput id="email" type="text" ref={emailInputRef} placeholder="correo@email.com" required onChange={handleChange} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Contraseña" />
                </div>
                <TextInput id="password" type="password" required onChange={handleChange} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Recordarme</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Olvidaste tu contraseña?
                </a>
              </div>
              <div className="w-full">
                <Button type="submit" >Ingresar</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                No tienes Cuenta Aún?
                <Link to="/register" onClick={() => setOpenModal(false)} className="text-cyan-700 hover:underline dark:text-cyan-500" >
                  Regístrate
                </Link>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
