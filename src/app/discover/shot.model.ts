export class Shot {
    constructor(
        public id: string,
        public name: string,
        public fields: string,
        public tags: string,
        public shotUrl: string,
        public ownerId: string
    ) {}
}
