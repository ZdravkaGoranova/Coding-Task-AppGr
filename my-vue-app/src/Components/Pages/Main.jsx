import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from 'uuid';


import CreateNote from "../../features/CreateNote";
import EditNote from "../../features/EditNote";



const Main = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [currentEditNite, setcurrentEditNite] = useState('');


    const fetchNotes = async () => {
        try {
            const data = JSON.parse(localStorage.getItem('Cooding Task'))
            if (data) {
                setNotes(data)
                console.log(data);
            }
            setNotes(data)
        } catch (error) {
            console.log(`Errrot:`, error);
            toast.error("Error fetching Notes !", error);
        }
    }
    const saveNote = async (note) => {
console.log(note);

        try {
            if (note) {
                const newNote = await note;
                setNotes([...notes], newNote);
                toast.success("The Note save successfully !");
            }

        } catch (error) {
            console.log(`Errrot:`, error);
            toast.error("Error save Note !", error);
        }

    }

    useEffect(() => {
        fetchNotes()
    }, [])

    useEffect(() => {
        window.localStorage.setItem('Cooding Task', JSON.stringify(notes))
    }, [notes])

    const saveHandler = (e) => {
        e.preventDefault();

        if (inputTitle.trim() == "") {

            toast.error("Input Title is required!");
            return;
        } if (inputContent.trim() == "") {
            toast.error("Input Content is required!");
            return;
        }

        if (inputTitle.trim() !== "" && inputContent.trim() !== "") {
            const newNote = {
                id: uuid(),
                key: uuid(),
                title: inputTitle,
                content: inputContent,
            }
            console.log(newNote);
            
            saveNote(newNote);
            setInputTitle('');
            setInputContent('');
        }
    }
    return (
        <>

            <CreateNote
                inputTitle={inputTitle}
                setInputTitle={setInputTitle}
                inputContent={inputContent}
                setInputContent={setInputContent}
                saveHandler={saveHandler}
            ></CreateNote>

            <EditNote></EditNote>
            <ToastContainer />
        </>
    );
};

export default Main;