module.exports = async function(bd, { proffyValue, classValue, classScheduleValues }){
    //inserir dados na table teacher
    const insertProffy = await bd.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertProffy.lastID
 /* INSERIR NO BANCO DE DADOS NA TABELA CLASSES */
    const insertedClass = await bd.run(`
         INSERT INTO classes(
             subject,
             cost,
             proffy_id
         ) VALUES(
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
         );   
    `)
    const class_id = insertedClass.lastID

    //INSERIR NA TABELA SCHEDULES

    const insertAlledclassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
        return bd.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    await Promise.all(insertAlledclassScheduleValues)

}