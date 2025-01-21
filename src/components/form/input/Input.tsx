import { IInputProps } from "@/interfaces/IInputProps";
import styles from "./Input.module.css"


export default function Input({ placeholder } : IInputProps) { 

    return <input placeholder={placeholder} className={styles.input} />

}