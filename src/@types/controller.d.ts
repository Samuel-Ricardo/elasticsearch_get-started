export interface IController {
    create: (req: Request, res: Response) => Promise<Any>
    findAll?: (req: Request, res: Response) => Promise<Any>
    findById?: (req: Request, res: Response) => Promise<Any>
    findByQuery?: (req: Request, res: Response) => Promise<Any>
}