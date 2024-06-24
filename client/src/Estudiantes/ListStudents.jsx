import { useEffect,useState, useRef } from "react";
import { db } from "../firebase/config";
import Users from "../components/Users";
//import openModal from "../../components/modal/OpenModal";
import paginación from "../components/Pagination";
import Student from "./Student";
import Buscador from "../components/Buscador";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useFetch } from "../hooks/useFetch";
//import { FaTrashAlt } from "react-icons/fa";
//import { TbEdit } from "react-icons/tb";
//import { IoMdAdd } from "react-icons/io";
// import "student.css";

export default function ListStudent() {
    const title = "Listado de Estudiantes";
    const [users,setUsers] = useState([])    
    const ref = useRef(null);
    const url = "";
    const [selectedItems, setSelectedItems] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPage, setItemsPage] = useState(8);
    let { data, isLoading, getData, deleteData } = useFetch(`${url}`);
    const filters = [
        { id: 1, nombre: "dni", descrip: "Documento" },
        { id: 2, nombre: "apellido", descrip: "Apellido" },
        { id: 3, nombre: "email", descrip: "email" },
        { id: 4, nombre: "celular", descrip: "celular" },
    ];

    function handleAddstudents() {
        const modalNivel = 2;
        const title = "Adición de Estudiantes";
        openModal(
            <Student student={""} edit={false} reviewList={updateList} />,
            null,
            "medio",
            title,
            modalNivel
        );
    } 

    function handleEdit() {
        const modalNivel = 2;
        const title = "Edición de Estudiante";
        openModal(
            <Student student={student} edit={true} reviewList={updatelist} />,
            null,
            "medio",
            title,
            modalNivel
        );
    }

    const updateList = async () => {
        await getStudents();
    };

    const handleDel = async (id) => {
        const url = "";
        const delId = id;
        Swal.fire({
            title: "¿Está Seguro?",
            text: "¿Desea eliminar este registro?",
            icon: "warning",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#ff0000",
            confirmButtonText: "Sí, Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                const borrar = async () => {
                    const resp = await deleteData(url, delId);
                    getStudents();
                    await Swal.fire({
                        title: "Eliminado!",
                        text: "El Estudiante fue Eliminado",
                        icon: "success",
                    });
                };
                borrar();
            }
        });
    };







    const handlePageChange = (newSelectedItems) => {
        setSelectedItems(newSelectedItems);
    };

    const getStudents = async () => {
        const url = " ";
        const result = await getData(url);
    };

    useEffect(() => {
        if (data?.message || data?.message != undefined) {
            Swal.fire(data?.message);
        }
    }, [data]);

    useEffect(() => {
        getStudents();
    }, []);



    return(

        <>
        <Buscador/>
        <h3 className='my-4'>Listado de Estudiantes</h3>
        <Table  striped  bordered  hover >
            <thead>
                <tr>
                    <th scope="col">Documento</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                { users.map((user) => (
                        <tr scope="row" key={user.id}>
                            <td>{user.document}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.dirección}</td>
                            <td>
                                <Button className="mx-3" onClick={() => handleEdit(user)}>
                                    Editar
                                </Button>
                                <Button onClick={() => handleDel(user.id)}>
                                    Eliminar
                                </Button>
                            </td>

                        </tr>
                    ))}
            </tbody>
        </Table>
        <paginación/>
        </>

    );
}