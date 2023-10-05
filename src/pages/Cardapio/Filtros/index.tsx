import styles from './Filtros.module.scss'; 
import filtros from './filtros.json';


interface IOpcao{
    id: number;
    label: string;
}

export default function Filtros(){
    return(
        <div className={styles.filtro}>
            {filtros.map((opcao) =>(
                <button  key={opcao.id} className={styles.filtro__filtro}>
                    {opcao.label}
                </button>
            
            ))}
        </div>
    )
}