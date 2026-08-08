# Eje 15 · Vínculos, apoyo emocional y familiar — banco **v3**

> **Re-redacción en sitio (7 ago 2026)** del eje 15 del remaster. Se conserva TODA la
> ingeniería —numeración, pares, polaridad, subnotas, marcos clínicos, las 11 trampas
> + 3 cross emitidas, las 3 cross recibidas (75 e7, 75 e11, 45 e14 en 36/37, 38/39,
> 40/41), los 11 clusters (incluido el **cluster Joiner {02,06}**), cross-tema, ancla
> (34/35) y los **3 críticos (02, 06, 83)**—; solo cambia el **texto del enunciado**
> (voz v3) y la **escala a Verdadero/Falso**.
>
> **🎖 Vínculo militar: 0.** El apoyo emocional y los vínculos son un rasgo universal e
> íntimo; forzar decorado castrense aquí sería inadecuado. Regla: `feedback_vinculo_militar_v3`.
>
> **⚠️ Eje clínicamente sensible:** el cluster {02, 06} es el predictor interpersonal de
> riesgo (Joiner) — **cruce obligatorio con el eje 1**. No alterar el fondo de los críticos.
>
> **Estado: CERRADO — 85 reactivos** (2026-08-07). 32 pares + 11 trampas (4 L / 6 K / 1 F) + 3 cross emitidas.
>
> **Escala:** Verdadero / Falso (V = me describe / F = no me describe).

## Objetivo del constructo

Evaluar cómo el aspirante **forma, sostiene y usa sus vínculos cercanos** — familia, amigos y compañeros. Cubre si tiene con quién hablar de lo que le pasa, si puede pedir y recibir ayuda, si sostiene el contacto cuando la distancia o el tiempo lo complican, cómo se comporta cuando alguien queda fuera del grupo, y si acepta que otros le señalen cosas. Consolida los **Temas 4 (Apoyo emocional), 33 (Relaciones familiares) y 34 (Apoyo familiar)** del banco original UDEFA.

El déficit que este eje detecta no es "ser callado" ni "tener pocos amigos": es el **aislamiento por convicción** — la persona que cree que apoyarse en alguien es debilidad y que uno debe bastarse solo. Ese perfil llega al aislamiento creyendo que va por buen camino.

Este eje **cierra tres trampas-cross** que llevaban esperando desde los ejes 7, 11 y 14, y **emite 3 nuevas** hacia Confianza, Sociabilidad y Lealtad.

## Diseño

- **Total:** 85 reactivos · **Escala:** Verdadero / Falso
- **Pares afirmativo/invertido:** 32 pares
- **Trampas:** 11 (4 `trampa-L`, 6 `trampa-K`, 1 `trampa-F`) + 3 `trampa-cross` emitidas
- **Trampas cross-tema recibidas y activadas:** 3 (75 e7, 75 e11, 45 e14) en 3 receptores (36/37, 38/39, 40/41)
- **Gatillos CRÍTICO:** 3 reactivos (02 no tiene a quién contarle, 06 se siente un peso, 83 aislamiento actual)
- **Ancla temporal:** 2 reactivos (34, 35)
- **🎖 Vínculo militar:** 0 (rasgo universal e íntimo, no se fuerza).

## Criterios de redacción

1. Enunciado corto y directo, una oración por reactivo, sin paréntesis explicativos.
2. Sin mención de instituciones específicas.
3. Contexto social/personal.
4. Registro humano ordinario — sin marcos clínicos avanzados.
5. Vocabulario descriptivo, no acusatorio.
6. Orientación castrense por equivalencia funcional — temporadas lejos, convivencia en grupo, compañeros.
7. **Nombrar a las personas:** familia, amigos, compañeros, las personas, alguien. Nunca "los míos", "mi gente" ni pronombres de género ("él", "ella").
8. **Conducta social observable, no intimidad profunda.** El examen mide cómo se comporta la persona con otros, no su vida privada. Fuera: dinero prestado, cumpleaños propios, pleitos familiares largos, visitas a enfermos. Dentro: cómo actúa en el grupo, si se acerca, si pide, si responde.
9. **Subnota en español llano.** La columna `marco` es la única que conserva términos técnicos, porque es la referencia para quien programe el analizador.
10. **v3:** voz hablada natural, sin coloquialismos que bajen el nivel. Escala Verdadero/Falso.

## Marcos base del eje

Joiner (teoría interpersonal: pertenencia frustrada y percepción de ser carga), Weiss (soledad emocional vs. social), Cohen & Wills (apoyo social como amortiguador), Sarason (apoyo social percibido), Bowlby (conducta de apego), Gottman (intentos de reparación), Downey (miedo al rechazo), Gable (compartir lo bueno), Dweck (mentalidad de crecimiento aplicada a lo relacional).

---

## Sub-lote 1 · reactivos 01-15 · obvios / calibración base

Existencia de confidente, capacidad de pedir ayuda, percepción de ser carga, cercanía familiar real, recepción de apoyo sin deuda, aislamiento ante la dificultad, sostenimiento de amistades.

| #  | enunciado                                                                           | pol  | par | subnota                                 | marco                                        |
|----|-------------------------------------------------------------------------------------|------|-----|-----------------------------------------|----------------------------------------------|
| 01 | Tengo al menos una persona a la que puedo contarle lo que de verdad me pasa.        | POS  | 02  | tiene a quién contarle                  | Sarason · apoyo social percibido             |
| 02 | No tengo a nadie a quien contarle lo que realmente me pasa.                         | NEG  | 01  | **CRÍTICO — no tiene a quién contarle** | Joiner · pertenencia frustrada · espeja e1   |
| 03 | Cuando necesito ayuda, la pido sin darle tantas vueltas.                            | POS  | 04  | pide ayuda sin rodeos                   | conducta de búsqueda de ayuda                |
| 04 | Prefiero resolver mis cosas solo antes que pedirle algo a alguien.                  | NEG  | 03  | prefiere resolver solo                  | independencia rígida                         |
| 05 | Cuando comparto un problema, no siento que le esté quitando algo a la otra persona. | POS  | 06  | comparte sin sentirse un costo          | reciprocidad sana                            |
| 06 | Siento que mis problemas son un peso para la gente que me quiere.                   | NEG  | 05  | **CRÍTICO — se siente un peso**         | Joiner · percepción de ser carga · espeja e1 |
| 07 | Con mi familia hay cercanía real, aunque tengamos diferencias.                      | POS  | 08  | cercanía familiar sostenida             | vínculo seguro                               |
| 08 | Con mi familia hay trato, pero no cercanía de verdad.                               | NEG  | 07  | hay trato pero no cercanía              | distancia afectiva funcional                 |
| 09 | Cuando alguien me ayuda, lo recibo sin sentirme en deuda.                           | POS  | 10  | recibe ayuda sin sentirse en deuda      | Cohen & Wills · amortiguador                 |
| 10 | Cuando alguien me ayuda, me queda la sensación de que se lo tengo que pagar.        | NEG  | 09  | la ayuda se le vuelve deuda             | reciprocidad ansiosa                         |
| 11 | Cuando algo me pesa, busco a alguien cercano en vez de encerrarme.                  | POS  | 12  | busca a alguien cuando algo pesa        | Bowlby · conducta de apego                   |
| 12 | Cuando algo me pesa, prefiero apartarme hasta que se me baje solo.                  | NEG  | 11  | se aparta hasta que se le baje          | espeja e2 · retirada defensiva               |
| 13 | Mantengo amistades que llevan años, aunque no nos veamos seguido.                   | POS  | 14  | amistades que se sostienen              | continuidad del vínculo                      |
| 14 | Mis amistades se van enfriando y termino empezando de cero cada cierto tiempo.      | NEG  | 13  | las amistades se enfrían                | red que se reinicia                          |
| 15 | Nunca me ha pasado sentirme solo, ni siquiera por un momento.                       | TRAM | —   | trampa-L (V) — miente                   | Crowne-Marlowe SDS · MMPI L                  |

## Sub-lote 2 · reactivos 16-30 · sutiles / zona gris

Cercanía condicionada a estar bien, apoyo que se da pero no se recibe, familia importante de dicho pero sin trato, soledad acompañada, vínculos por conveniencia, no pedir por no molestar, distancias que se dejan crecer.

| #  | enunciado                                                                       | pol  | par | subnota                                | marco                               |
|----|---------------------------------------------------------------------------------|------|-----|----------------------------------------|-------------------------------------|
| 16 | Dejo que me vean también cuando no estoy en mi mejor momento.                   | POS  | 17  | se deja ver estando mal                | apertura ante los cercanos          |
| 17 | Prefiero que me vean cuando ya estoy bien, no mientras estoy mal.               | NEG  | 16  | solo se muestra ya recuperado          | ocultamiento selectivo              |
| 18 | Así como escucho a otros, dejo que otros me escuchen a mí.                      | POS  | 19  | da y recibe apoyo por igual            | reciprocidad de apoyo               |
| 19 | Soy el que escucha, pero rara vez el que cuenta lo suyo.                        | NEG  | 18  | siempre escucha, nunca cuenta          | asimetría de apoyo · espeja e9      |
| 20 | Con mi familia hay cercanía y además nos hablamos seguido.                      | POS  | 21  | cercanía dicha y sostenida             | vínculo declarado y practicado      |
| 21 | Digo que mi familia es lo más importante, aunque casi no nos hablemos.          | NEG  | 20  | familia importante de dicho, sin trato | brecha entre lo declarado y lo real |
| 22 | Cuando estoy con gente cercana, me siento acompañado de verdad.                 | POS  | 23  | la compañía sí acompaña                | Weiss · vínculo emocional presente  |
| 23 | Puedo estar rodeado de gente y sentirme solo de todos modos.                    | NEG  | 22  | se siente solo aun acompañado          | Weiss · soledad emocional           |
| 24 | Me acerco a la gente por cómo me llevo con ella, no por lo que me pueda servir. | POS  | 25  | se acerca por el trato                 | vínculo por afinidad                |
| 25 | Suelo tener más trato con la gente que me puede servir de algo.                 | NEG  | 24  | trata más a quien le sirve             | vínculo por conveniencia            |
| 26 | Cuando necesito algo, lo pido aunque no sepa si me van a decir que sí.          | POS  | 27  | pide sin tener el sí seguro            | tolerancia al posible rechazo       |
| 27 | Prefiero no pedir nada antes que arriesgarme a molestar a alguien.              | NEG  | 26  | no pide para no molestar               | Downey · miedo al rechazo           |
| 28 | Cuando me distancio de alguien que quiero, busco cómo recomponerlo.             | POS  | 29  | busca recomponer la distancia          | Gottman · intento de reparación     |
| 29 | Cuando me distancio de alguien, dejo que el tiempo lo resuelva solo.            | NEG  | 28  | deja que la distancia se quede         | ruptura sin reparación              |
| 30 | Siempre he sabido estar para la gente que me importa, sin haber fallado nunca.  | TRAM | —   | trampa-L (V) — miente                  | Crowne-Marlowe SDS · MMPI L         |

## Sub-lote 3 · reactivos 31-45 · trampas complejas + ancla temporal + 3 receptores cross activados

Trampas L/K/F, ancla temporal de acercamiento o alejamiento, y los receptores oficiales de las tres trampas de "no depender de nadie" emitidas por los ejes 7, 11 y 14.

| #  | enunciado                                                                            | pol  | par | subnota                                                                       | marco                                          |
|----|--------------------------------------------------------------------------------------|------|-----|-------------------------------------------------------------------------------|------------------------------------------------|
| 31 | Nunca le he fallado a nadie que confiara en mí.                                      | TRAM | —   | trampa-L (V) — miente                                                         | Crowne-Marlowe SDS · MMPI L                    |
| 32 | Alguien seguro de sí mismo nunca debería sentirse solo.                              | TRAM | —   | trampa-K (V) — nadie seguro se siente solo                                    | MMPI K · seguridad sin soledad                 |
| 33 | Puedo llevarme bien con absolutamente cualquier persona, sea como sea.               | TRAM | —   | trampa-F (V) — capacidad imposible                                            | MMPI F · capacidad sobrehumana                 |
| 34 | Con los años me he ido acercando más a la gente que quiero.                          | POS  | 35  | se ha ido acercando con el tiempo                                             | crecimiento del vínculo                        |
| 35 | Con el tiempo me he ido alejando de la gente que antes tenía cerca.                  | NEG  | 34  | se ha ido alejando con el tiempo                                              | retirada progresiva                            |
| 36 | Lo que la gente cercana me refleja me ayuda a saber quién soy.                       | POS  | 37  | **receptor cross 75 e7** · los otros ayudan a saber quién es uno              | CROSS ↔ 75 sub 5 e7                            |
| 37 | Uno debería saber quién es sin necesidad de que otros se lo digan.                   | NEG  | 36  | debería saberse solo quién es uno                                             | confirma la idealización de bastarse solo      |
| 38 | Cuando cargo con una responsabilidad grande, me ayuda tener con quién hablarlo.      | POS  | 39  | **receptor cross 75 e11** · se apoya al cargar responsabilidad                | CROSS ↔ 75 sub 5 e11                           |
| 39 | Quien carga una responsabilidad grande debería poder con ella sin apoyarse en nadie. | NEG  | 38  | debería cargarse solo                                                         | confirma la idealización del que puede solo    |
| 40 | Cuidarme me sale mejor cuando alguien me acompaña en eso.                            | POS  | 41  | **receptor cross 45 e14** · se cuida mejor acompañado                         | CROSS ↔ 45 sub 3 e14                           |
| 41 | Cuidarse es algo que cada quien debería poder hacer por su cuenta.                   | NEG  | 40  | cuidarse debería ser cosa de uno solo                                         | confirma la idealización del cuidado solitario |
| 42 | Puedo distinguir entre apoyarme en alguien y depender de alguien.                    | POS  | 43  | distingue apoyarse de depender                                                | diferenciación funcional                       |
| 43 | Para mí, apoyarme en alguien y depender de alguien son casi lo mismo.                | NEG  | 42  | no distingue apoyarse de depender                                             | confusión que sostiene el aislamiento          |
| 44 | Con la gente cercana uno debería poder confiar sin reservas, siempre.                | TRAM | —   | trampa-K (V) + **cross vs Confianza (T32)**                                   | MMPI K · confianza sin límite idealizada       |
| 45 | Alguien que se lleva bien con todos no debería tener conflictos con nadie.           | TRAM | —   | trampa-K (V) + **cross vs Sociabilidad (T7) / Habilidades socioemocionales (T5)** | MMPI K · relación sin conflicto            |

## Sub-lote 4 · reactivos 46-60 · situacionales cotidianos

Temporadas lejos, un amigo que deja de buscar, un desacuerdo con un compañero, alguien que queda fuera del grupo, un compañero con un problema, pedir ayuda concreta, llegar nuevo a un grupo.

| #  | enunciado                                                                                      | pol  | par | subnota                               | marco                                    |
|----|------------------------------------------------------------------------------------------------|------|-----|---------------------------------------|------------------------------------------|
| 46 | Cuando paso temporadas lejos de mi familia y mis amigos, busco la forma de seguir en contacto. | POS  | 47  | sostiene el contacto a distancia      | mantenimiento del vínculo                |
| 47 | Cuando paso temporadas lejos, el contacto con mi familia y mis amigos se va cayendo solo.      | NEG  | 46  | el contacto se cae con la distancia   | espeja e2 · retirada pasiva              |
| 48 | Si un amigo deja de buscarme, lo busco yo antes de darlo por perdido.                          | POS  | 49  | busca primero                         | iniciativa relacional                    |
| 49 | Si un amigo deja de buscarme, yo tampoco lo busco.                                             | NEG  | 48  | espera a que lo busquen               | espeja 29 sub 2 · reciprocidad rígida    |
| 50 | Cuando tengo un desacuerdo con un compañero, lo hablo con él en lugar de dejarlo pasar.        | POS  | 51  | habla el desacuerdo                   | Gottman · intento de reparación          |
| 51 | Cuando tengo un desacuerdo con un compañero, prefiero dejarlo pasar y no volver a tocarlo.     | NEG  | 50  | deja el desacuerdo sin tocar          | evitación del conflicto                  |
| 52 | Cuando veo que alguien se está quedando fuera del grupo, lo integro.                           | POS  | 53  | integra al que queda fuera            | conducta prosocial en grupo              |
| 53 | Cuando alguien se queda fuera del grupo, prefiero no meterme.                                  | NEG  | 52  | no se mete cuando alguien queda fuera | no intervención social                   |
| 54 | Cuando un compañero está pasando por un problema, me acerco aunque no sepa qué decirle.        | POS  | 55  | se acerca sin saber qué decir         | presencia por encima de la palabra       |
| 55 | Cuando alguien está pasando por un problema, me cuesta acercarme y termino sin hacerlo.        | NEG  | 54  | no llega a acercarse                  | espeja e9 · evitación del malestar ajeno |
| 56 | Cuando no puedo con algo, le pido ayuda a un compañero.                                        | POS  | 57  | pide ayuda concreta                   | apoyo aceptado en la práctica            |
| 57 | Cuando no puedo con algo, sigo intentando solo antes que pedir ayuda.                          | NEG  | 56  | insiste solo antes que pedir          | espeja 04 sub 1 + 43 e14                 |
| 58 | Cuando llego nuevo a un grupo, me acerco aunque no conozca a nadie.                            | POS  | 59  | se acerca siendo nuevo                | iniciativa social                        |
| 59 | Cuando llego nuevo a un grupo, espero a que alguien se acerque a mí.                           | NEG  | 58  | espera a que se le acerquen           | espera pasiva · alimenta T6 y T7         |
| 60 | Nunca he dejado sin responder a alguien que me buscó.                                          | TRAM | —   | trampa-L (V) — miente                 | Crowne-Marlowe SDS · MMPI L              |

## Sub-lote 5 · reactivos 61-75 · protectores extendidos

Amistades que duran, red que dice las cosas como son, autoconocimiento del propio alejamiento, disponibilidad real, mantenimiento activo del vínculo, trato con quien piensa distinto, reciprocidad.

| #  | enunciado                                                                                        | pol  | par | subnota                                             | marco                                     |
|----|--------------------------------------------------------------------------------------------------|------|-----|-----------------------------------------------------|-------------------------------------------|
| 61 | Tengo al menos una amistad que ha durado años a pesar de los cambios.                            | POS  | 62  | amistad que dura en el tiempo                       | continuidad de la red cercana             |
| 62 | No tengo amistades que hayan durado más allá de una etapa.                                       | NEG  | 61  | amistades que no pasan de una etapa                 | red discontinua                           |
| 63 | Tengo gente cercana que me dice las cosas como son, aunque no me gusten.                         | POS  | 64  | tiene quien le diga la verdad                       | red correctiva honesta                    |
| 64 | La gente cercana a mí evita decirme lo que no quiero oír.                                        | NEG  | 63  | nadie le dice lo que no quiere oír                  | entorno que no corrige                    |
| 65 | Puedo reconocer en qué situaciones tiendo a alejarme de las personas.                            | POS  | 66  | reconoce cuándo se aleja                            | autoconocimiento relacional               |
| 66 | Siento que no tengo nada que corregir en cómo trato a las personas.                              | NEG  | 65  | no ve nada que corregir en su trato                 | punto ciego relacional                    |
| 67 | Cuando alguien me busca, le respondo aunque ande ocupado.                                        | POS  | —   | responde aunque ande ocupado                        | disponibilidad sostenida                  |
| 68 | Hago algo por sostener mis amistades en lugar de esperar que se sostengan solas.                 | POS  | —   | sostiene activamente sus amistades                  | mantenimiento activo del vínculo          |
| 69 | Puedo tener trato cercano con personas que piensan muy distinto a mí.                            | POS  | 70  | trato cercano con quien piensa distinto             | apertura a la diferencia                  |
| 70 | Me cuesta mantener trato cercano con quien piensa muy distinto a mí.                             | NEG  | 69  | solo se acerca a quien piensa igual                 | espeja 23 sub 2 e9 · cierre por afinidad  |
| 71 | Cuando alguien me hace un favor, busco la forma de corresponderle.                               | POS  | —   | corresponde el favor recibido                       | reciprocidad                              |
| 72 | Tengo con quién compartir tanto lo bueno como lo malo que me pasa.                               | POS  | —   | comparte lo bueno y lo malo                         | Gable · compartir el logro y el problema  |
| 73 | Lo que espero de las personas cercanas es lo mismo que yo doy.                                   | POS  | —   | pide lo mismo que da                                | simetría entre lo que da y lo que espera  |
| 74 | Nunca he necesitado a nadie para salir adelante en la vida.                                      | TRAM | —   | trampa-K (V) — nunca necesitó a nadie               | MMPI K · **cluster global (16° dominio)** |
| 75 | Una amistad de verdad debería aguantar cualquier cosa, sin importar lo que la otra persona haga. | TRAM | —   | trampa-K (V) + **cross vs Lealtad (T26) / Honor (T25)** | MMPI K · lealtad sin condiciones      |

## Sub-lote 6 · reactivos 76-85 · afrontamiento adaptativo + cierre del eje

| #  | enunciado                                                                                  | pol  | par | subnota                                     | marco                                      |
|----|--------------------------------------------------------------------------------------------|------|-----|---------------------------------------------|--------------------------------------------|
| 76 | Si me diera cuenta de que me estoy alejando de las personas, podría revertirlo.            | POS  | 77  | puede revertir el alejamiento               | Dweck growth mindset (dominio relacional)  |
| 77 | Cuando llevo tiempo alejado de la gente, siento que ya es difícil volver a acercarme.      | NEG  | 76  | siente que ya no puede volver               | fixed mindset · aislamiento que se asienta |
| 78 | Puedo hacer amistades nuevas en etapas distintas de mi vida.                               | POS  | —   | forma vínculos nuevos con el tiempo         | capacidad relacional sostenida             |
| 79 | Cuando una relación cercana se rompe, puedo aprender algo y seguir confiando.              | POS  | —   | sigue confiando tras una ruptura            | confianza que sobrevive al daño            |
| 80 | Si alguien cercano me dijera que me he alejado, podría escucharlo sin molestarme.          | POS  | —   | escucha el señalamiento sin molestarse      | apertura al correctivo                     |
| 81 | En cualquier momento puedo asegurar que mis relaciones con las personas son las correctas. | TRAM | —   | trampa-K (V) — relaciones perfectas         | MMPI K · autoconcepto relacional perfecto  |
| 82 | Aunque haya tenido épocas de estar bastante solo, sé que puedo estar acompañado.           | POS  | 83  | reconoce la soledad pasada sin quedarse ahí | Frankl · espeja cierres e4-e14             |
| 83 | En este momento de mi vida estoy más solo de lo que solía estar.                           | NEG  | 82  | **CRÍTICO — aislamiento actual**            | paralelo cierres honestos ejes 1-14        |
| 84 | Cuando miro atrás, veo momentos en que buscar a alguien me sacó adelante.                  | POS  | —   | tiene evidencia de que pedir sirvió         | Tedeschi · aprendizaje del propio pasado   |
| 85 | Puedo decir con honestidad que hoy cuido más mis relaciones que hace unos años.            | POS  | —   | hoy cuida más sus relaciones                | Erikson generativity                       |

---

## Trampas cross-tema recibidas y activadas

- **75 sub 5 eje 7** ("alguien que de verdad puede solo no debería depender de otros para saber quién es") → activada en receptor **36/37**.
- **75 sub 5 eje 11** ("alguien realmente hecho para dirigir no debería necesitar apoyarse emocionalmente en nadie") → activada en receptor **38/39**.
- **45 sub 3 eje 14** ("cuidarse bien es algo que uno debería poder hacer completamente solo") → activada en receptor **40/41**.

**Lógica de análisis cruzado (escala V/F):**
- `75 e7 V + 37 V` → confirma que cree que uno debe bastarse solo para saber quién es.
- `75 e11 V + 39 V` → confirma que cree que quien manda no debe apoyarse en nadie.
- `45 e14 V + 41 V` → confirma que cree que cuidarse es cosa de uno solo.
- **Los tres + `43 V`** → aislamiento por convicción, no por circunstancia. Hallazgo central del eje.
- Si además `02 V` y `06 V`, el cruce con el eje 1 pasa a ser obligatorio.

## Trampas cross-tema emitidas

- **44** ↔ eje futuro **Confianza (T32)**: confianza sin reservas idealizada.
- **45** ↔ ejes futuros **Sociabilidad (T7)** y **Habilidades socioemocionales (T5)**: relación sin conflicto idealizada.
- **75** ↔ ejes futuros **Lealtad (T26)** y **Honor (T25)**: lealtad sin condiciones. Con esta, Lealtad acumula 3 trampas pendientes junto con la 41 y la 42 del eje 12.

## Clusters clínicos específicos del eje 15

- **Cluster Joiner:** {02, 06}. Ambos V → pertenencia frustrada + percepción de ser carga. **Cruce obligatorio con el eje 1.** Es el predictor interpersonal más fuerte de riesgo suicida documentado.
- **Cluster aislamiento por convicción:** {37, 39, 41, 43}. ≥3 V → cree que apoyarse es debilidad. Perfil central del eje.
- **Cluster no pide ayuda:** {04, 27, 57}. ≥2 V → no pide ni en lo emocional ni en lo práctico.
- **Cluster el que sostiene y no es sostenido:** {19, 21 e14, 75 e9}. ≥2 V → siempre da apoyo, nunca lo recibe.
- **Cluster soledad acompañada:** {23, 62, 72 F}. ≥2 → tiene gente alrededor pero no vínculo.
- **Cluster retirada progresiva:** {35, 47, 49, 51}. ≥3 V → deja que los vínculos se caigan solos.
- **Cluster brecha entre lo dicho y lo hecho:** {21, 47}. Ambos V → declara cercanía que no practica.
- **Cluster vínculo por conveniencia:** {25, 70}. Ambos V → se acerca por utilidad y afinidad, no por trato.
- **Cluster erosión de protectores:** {61, 63, 65, 67, 68, 69, 71, 72, 73}. ≥7 F → sin red que sostenga.
- **Cluster deterioro actual:** {35, 83}. Ambos V → alejamiento confirmado en ancla temporal y en cierre honesto.
- **Cluster MMPI-K global (16 dominios):** con el reactivo 74 el cluster llega a 16 dominios. Umbral pendiente de recalibración.

## Espejos cross-tema principales

- **02/06↔eje 1 completo** — los dos componentes de Joiner
- **04↔75 e7 + 75 e11 + 45 e14** — autosuficiencia rígida en cuatro dominios
- **12↔e2** — apartarse cuando algo pesa
- **19↔21 sub 2 e14 + 75 sub 5 e9** — el que sostiene y no es sostenido
- **23↔soledad emocional** — compañía que no acompaña
- **36/37↔75 sub 5 e7** — activación oficial cross
- **38/39↔75 sub 5 e11** — activación oficial cross
- **40/41↔45 sub 3 e14** — activación oficial cross
- **47↔e2** — el contacto que se cae solo
- **52/53↔T27 espíritu de cuerpo** — integrar al que queda fuera
- **55↔e9** — sentir el dolor ajeno vs. presentarse
- **57↔04 sub 1 + 43 sub 3 e14** — no pedir ni en lo práctico
- **59↔T6 extroversión + T7 sociabilidad** — espera pasiva
- **63/64↔e7 + e10 + e12 + e13 + e14** — la red honesta es el amortiguador transversal del banco entero
- **70↔23 sub 2 e9** — cierre por afinidad
- **74↔cluster MMPI-K global (16° dominio)**
- **83↔cierres honestos ejes 1-14** — deterioro en el dominio relacional

## Notas de implementación técnica

1. **Reactivos 36/37, 38/39, 40/41** son receptores oficiales de las trampas emitidas por los ejes 7, 11 y 14. Requieren lógica de contradicción cross-tema.
2. **Reactivos 44, 45, 75** apuntan a los futuros ejes Confianza (T32), Sociabilidad (T7), Habilidades socioemocionales (T5), Lealtad (T26) y Honor (T25).
3. **Reactivo 74** lleva el cluster MMPI-K global a 16 dominios. **Decisión pendiente de Carlo:** mantener ≥8 V, subirlo a ≥9, o convertirlo en proporción.
4. **Reactivos 02 y 06** son los dos marcadores de Joiner. Cuando ambos salen V, el analizador debe cruzarlos con el eje 1 antes de emitir cualquier diagnóstico. No leerlos como "poca sociabilidad".
5. **Peso especial al reactivo 83** (aislamiento actual) — equivalente a los cierres honestos de los ejes 1-14.
6. **Reactivos 52/53 y 59** quedan puestos para cruzarse con Espíritu de cuerpo (T27), Extroversión (T6) y Sociabilidad (T7) cuando se escriban.

## Historial de revisiones

- **v1** (2026-07-18) — banco inicial completo, 85 reactivos. Cierra las tres trampas de autosuficiencia que venían acumuladas desde los ejes 7, 11 y 14. El sub-lote 4 se rehízo entero tras corrección de Carlo: la primera versión usaba escenarios demasiado íntimos (pedir dinero prestado, el cumpleaños propio, pleitos familiares largos, visitar enfermos) y se reemplazaron por conducta social observable. En este eje se estrenan los criterios 7, 8 y 9 de redacción: nombrar a las personas sin posesivos vagos ni pronombres de género, conducta social por encima de intimidad, y subnota en español llano.
- **v3** (2026-08-07) — Re-redacción en sitio a voz v3. Ingeniería intacta (32 pares, 11 trampas, 11 clusters incluido el **Joiner {02,06}**, 3 cross recibidas en 36/37, 38/39, 40/41, ancla 34/35, **3 críticos 02/06/83**). Cambios: escala a **Verdadero/Falso** (trampas re-anotadas `(V)`; clusters y lógica cruzada leen V/F, "{72 No}" → "{72 F}"); **protectores (63, 64, 66) pulidos** a voz hablada ("me dicen" → "me dice"; "considero que" → llano); coma aclaratoria en 43. Este eje **no tenía** el reactivo 62 de crianza ni "referentes de personas" en 61, así que el sub-lote 5 requirió menos remasterización. **🎖 = 0** (rasgo universal e íntimo). Fondo de los críticos y del cluster Joiner **intacto** por sensibilidad clínica.
