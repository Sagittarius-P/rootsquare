import { useState, useRef } from "react";
import styles from "./Body.module.css";
import "../index.css";
import copySVG from "../assets/copy-svgrepo-com.svg";

function Body() {
    const focusBg = useRef(null);
    const notifTopCenter = useRef(null);
    let focusPropertyElement = null;
    
    function focusProperty(e) {
        focusBg.current.classList.add(styles.active);
        e.currentTarget.style.zIndex = '2';
        focusPropertyElement = e.currentTarget;
    }

    function unfocusProperty(e) {
        focusPropertyElement.style.zIndex = '1'
        focusBg.current.classList.remove(styles.active);
    }

    function copyFrameClc(e) {
        e.stopPropagation();
        navigator.clipboard.writeText(e.currentTarget.textContent);
        notifTopCenter.current.innerHTML = `<img src="${copySVG}"/><span>Copied !</span>`;
        notifTopCenter.current.classList.add(styles.active);
        setTimeout(() => {
            notifTopCenter.current.classList.remove(styles.active);
        }, 1500);
    }

    return (
        <>
            <div ref={focusBg} className={styles.focusBg} onClick={unfocusProperty}></div>
            <div ref={notifTopCenter} className={`${styles.notifTopCenter} no-select`}></div>
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
                        <span onClick={copyFrameClc} className={`${styles.frameCalcul} no-select`}>
                            3 × 3 = 9
                        </span>
                        &nbsp;Ou encore&nbsp;
                        <span onClick={copyFrameClc}  className={`${styles.frameCalcul} no-select`}>
                            3² = 9
                        </span>
                    </span>
                </li>
            </ul>
            <ul className={styles.frame} data-frame-title="Carrés parfaits" onClick={focusProperty}>
                <li>
                    On distingue les <strong>carrés à résultat rationnel</strong> des
                    <strong>carrés à résultat irrationnel</strong>.
                </li>
                <span className={styles.logicResult}>
                    Les carrés à résultat rationnel sont plus communément appelés <span className={styles.className}>carrés parfaits</span>.
                </span>
                <br></br><br></br>
                <span className={styles.exampleName}>Exemple</span>
                <span className={styles.RS_Container}>
                    <span className={styles.RS_Radical}>&radic;</span>
                    <span className={styles.RS_Nbr}>16</span>
                </span>
                &nbsp;en est un  → &nbsp;
                <span onClick={copyFrameClc} className={`${styles.frameCalcul} no-select`}>
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
                <li>
                    <span>
                        <span style={{ fontSize:'25px', paddingRight:'25px' }}>→</span>
                        Mais d'autres règles de calcul très utiles, fonctionnent avec les racines carrées.
                    </span>
                </li>
                <li>
                    <ul className={styles.borderFrame}>
                        <li>
                            <span className={styles.clcRules}>
                                Les voici :
                            </span>
                        </li>
                        <li>
                            •&nbsp;&nbsp;
                            <span className={styles.RS_Container}>
                                <span className={styles.RS_Radical}>&radic;</span>
                                <span className={styles.RS_Nbr}>𝑥</span>
                            </span>
                            ×
                            <span className={styles.RS_Container}>
                                <span className={styles.RS_Radical}>&radic;</span>
                                <span className={styles.RS_Nbr}>𝑦</span>
                            </span>
                            =
                            <span className={styles.RS_Container}>
                                <span className={styles.RS_Radical}>&radic;</span>
                                <span className={styles.RS_Nbr}>𝑥 × 𝑦</span>
                            </span>
                        </li>
                        <li>
                            •&nbsp;&nbsp;
                            <span className={styles.RS_Container}>
                                <span className={styles.RS_Radical}>&radic;</span>
                                <span className={styles.RS_Nbr}>
                                    <span className={styles.division_Container}>
                                        <span className={styles.divisionNumerator}>𝑥</span>
                                        <span className={styles.divisionDenominator}>𝑦</span>
                                    </span>
                                </span>
                            </span>
                            =
                            <span className={styles.division_Container}>
                                <span className={styles.divisionNumerator}>
                                    <span className={styles.RS_Container}>
                                        <span className={styles.RS_Radical}>&radic;</span>
                                        <span className={styles.RS_Nbr}>𝑥</span>
                                    </span>
                                </span>
                                <span className={styles.divisionDenominator}>
                                    <span className={styles.RS_Container}>
                                        <span className={styles.RS_Radical}>&radic;</span>
                                        <span className={styles.RS_Nbr}>𝑦</span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li>
                            •&nbsp;&nbsp;
                            (<span className={styles.RS_Container}>
                                <span className={styles.RS_Radical}>&radic;</span>
                                <span className={styles.RS_Nbr}>𝑥</span>
                            </span>)²
                            = 𝑥
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Body;