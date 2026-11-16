import { useState, useRef } from "react";
import styles from "./Body.module.css";
import "../index.css";

function Body() {
    const focusBg = useRef(null);
    let focusPropertyElement = null;
    
    function focusProperty(e) {
        focusBg.current.style.display = 'flex';
        e.currentTarget.style.zIndex = '2';
        focusPropertyElement = e.currentTarget;
    }

    function unfocusProperty(e) {
        focusPropertyElement.style.zIndex = '1'
        focusBg.current.style.display = 'none';
    }

    return (
        <>
            <div ref={focusBg} className={styles.focusBg} onClick={unfocusProperty}></div>
            <div className={`${styles.title} no-select`}>
                <span>Racines Carrées</span>
            </div>
            <ul className={styles.frame} data-frame-title="Propriétés" onClick={focusProperty}>
                <li>
                    <span className={styles.propertyName}>
                        Définition
                    </span>
                    La Racine Carrée d'un nombre réel positif
                    𝑥 est l'unique nombre réel positif dont le
                    carré est égal à 𝑥.
                </li>
                <li>
                    <span className={styles.propertyName}>
                        Condition d'existence
                    </span>
                    𝑥 doit être positif ou nul car un carré est toujours positif ou nul (𝑥 ≥ 0).
                </li>
                <li>
                    <span className={styles.logicResult}>
                        Ainsi si nous cherchons &nbsp;
                        <span className={styles.RS_Container}>
                            <span className={styles.RS_Radical}>&radic;</span>
                            <span className={styles.RS_Nbr}>9</span>
                        </span>
                        &nbsp;→ nous trouverons <strong>3</strong> car &nbsp;
                        <span className={`${styles.frameCalcul} no-select`}>
                            3 × 3 = 9
                        </span>
                        &nbsp;Ou encore&nbsp;
                        <span className={`${styles.frameCalcul} no-select`}>
                            3² = 9
                        </span>
                    </span>
                </li>
            </ul>
            <ul className={styles.frame} data-frame-title="Carrés parfaits" onClick={focusProperty}>
                <li>
                    On distingue les <strong>carrés à résultat rationnels</strong> des
                    <strong>carrés à résultat irrationnel</strong>.
                </li>
                <span className={styles.logicResult}>
                    Les carrés rationnels sont plus communément appelés <span className={styles.className}>carrés parfaits</span>.
                </span>
                <br></br><br></br>
                <span className={styles.exampleName}>Exemple</span>
                <span className={styles.RS_Container}>
                    <span className={styles.RS_Radical}>&radic;</span>
                    <span className={styles.RS_Nbr}>16</span>
                </span>
                &nbsp;en est un  → &nbsp;
                <span className={`${styles.frameCalcul} no-select`}>
                    4 × 4 = 16
                </span>
                &nbsp;&nbsp;Mais pas &nbsp;
                <span className={styles.RS_Container}>
                    <span className={styles.RS_Radical}>&radic;</span>
                    <span className={styles.RS_Nbr}>2</span>
                </span>
                &nbsp;→ tend vers l'infini (irrationnel).
            </ul>
            <ul className={styles.frame} data-frame-title="Règles de calcul" onClick={focusProperty}>
                <li>
                    <span className={styles.logicResult}>
                        Il n'existe pas de règle de calcul pour l'addition de deux racines carrées :(
                    </span>
                </li>
                <li>
                    <span className={styles.exampleName}>Donc</span>
                    <span className={styles.RS_Container}>
                        <span className={styles.RS_Radical}>&radic;</span>
                        <span className={styles.RS_Nbr}>𝑥</span>
                    </span>
                    +
                    <span className={styles.RS_Container}>
                        <span className={styles.RS_Radical}>&radic;</span>
                        <span className={styles.RS_Nbr}>𝑦</span>
                    </span>
                    ≠
                    <span className={styles.RS_Container}>
                        <span className={styles.RS_Radical}>&radic;</span>
                        <span className={styles.RS_Nbr}>𝑥 + 𝑦</span>
                    </span>
                </li>
            </ul>
        </>
    )
}

export default Body;