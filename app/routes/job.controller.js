const tokenValidator = require('../../config/security/tokenValidator')

module.exports = routes => {

    const db = routes.config.firebaseConfig.collection('jobs')

    routes.get('/jobs/:id', tokenValidator, async (req, res) => {
        try {
            let job = await db.doc(req.params.id).get()

            if (job.exists)
                return res.send(extractJob(job))
            else
                return res.status(404).send('Job not found')
        } catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.get('/jobs/', tokenValidator, async (req, res) => {
        try {
            let docs = await db.get()
            let jobs = []

            docs.forEach(doc => {
                jobs.push(extractJob(doc))
            })

            return res.send(jobs)
        } catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.post('/jobs', tokenValidator, async (req, res) => {
        try {
            const result = await db.add(req.body)

            return res.send(result.id)
        }
        catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.put('/jobs/:id', tokenValidator, async (req, res) => {
        try {
            await db.doc(req.params.id).update(req.body)
            return res.send(`A vaga ${req.params.id} foi atualizada com sucesso`)
        }
        catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.delete('/jobs/:id', tokenValidator, async (req, res) => {
        try {
            await db.doc(req.params.id).delete()
            return res.send(`A vaga ${req.params.id} foi removida com sucesso`)
        } catch (error) {
            return res.status(500).send(error)
        }
    })

    extractJob = job => {
        let v = job.data();

        return {
            id: job.id,
            name: v.name,
            salary: v.salary,
            description: v.description,
            skills: v.skills,
            area: v.area,
            differentials: v.differentials,
            isPcd: v.isPcd,
            isActive: v.isActive
        }
    }
}