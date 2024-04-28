import styles from './TableInspector.module.scss';

function TableInspector() {
    return (
        <div className={`${styles['table-inspector']} w-[200px] h-[200px]`}>
            <div className={styles.header}>
                <p>Table</p>
            </div>
            <div className={styles.content}>
                <button>Посмотреть всё</button>
                <button>Добавить</button>
                <button>Изменить</button>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export { TableInspector };
