export class SendContactService {
    async execute(params: { name: string, email: string, message: string }): Promise<boolean> {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            })

            if (res.ok) {
                return true
            }
            else {
                return false
            }
        } catch (error) {
            return false
        }
    }
}
