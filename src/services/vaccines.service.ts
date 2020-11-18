import { IVaccine } from "./IVaccine";

const VaccinesService = {
    items: [{
        "title": "BCG",
        "extra": "Unica Dosis",
        "age": 0
    }, {
        "title": "Hepatitis B HB",
        "extra": "Dosis neonatal",
        "age": 0
    }, {
        "title": "Neumococo Conjugada",
        "extra": "Primera Dosis",
        "age": 2
    }, {
        "title": "Quíntuple Pentavalente DTP-HB-Hib",
        "extra": "Primera Dosis",
        "age": 2
    }, {
        "title": "Rotavirus",
        "extra": "Primera Dosis",
        "age": 2
    }, {
        "title": "Polio IPV",
        "extra": "Primera Dosis",
        "age": 2
    }, {
        "title": "Meningococo",
        "extra": "Primera Dosis",
        "age": 3
    }, {
        "title": "Neumococo Conjugada",
        "extra": "Segunda Dosis",
        "age": 4
    }, {
        "title": "Quíntuple Pentavalente DTP-HB-Hib",
        "extra": "Segunda Dosis",
        "age": 4
    }, {
        "title": "Rotavirus",
        "extra": "Segunda Dosis",
        "age": 4
    }, {
        "title": "Polio IPV",
        "extra": "Segunda Dosis",
        "age": 4
    }, {
        "title": "Meningococo",
        "extra": "Segunda Dosis",
        "age": 5
    }, {
        "title": "Quíntuple Pentavalente DTP-HB-Hib",
        "extra": "Tercer Dosis",
        "age": 6
    }, {
        "title": "Polio OPV",
        "extra": "Tercer Dosis",
        "age": 6
    }, {
        "title": "Gripe",
        "extra": "dosis anual entre los 6 y 24 meses",
        "age": 6
    }, {
        "title": "Neumococo Conjugada",
        "extra": "Refuerzo",
        "age": 12
    }, {
        "title": "Triple Viral SRP",
        "extra": "Primera Dosis",
        "age": 12
    }, {
        "title": "Hepatitis A HA",
        "extra": "Única Dosis",
        "age": 12
    }, {
        "title": "Cuádruple o Quíntuple Pentavalente",
        "extra": "Primer Refuerzo (Entre los 15-18 meses)",
        "age": 15
    }, {
        "title": "Polio OPV",
        "extra": "Primer Refuerzo (Entre los 15-18 meses)",
        "age": 15
    }, {
        "title": "Varicela",
        "extra": "Única Dosis",
        "age": 15
    }, {
        "title": "Meningococo",
        "extra": "Refuerzo",
        "age": 15
    }, {
        "title": "Fiebre Amarilla FA",
        "extra": "Primera Dosis",
        "age": 18
    }, {
        "title": "Polio OPV",
        "extra": "Refuerzo - 5/6 años (Ingreso escolar)",
        "age": 60
    }, {
        "title": "Tripe Viral SRP",
        "extra": "Segunda Dosis - 5/6 años (Ingreso escolar)",
        "age": 60
    }, {
        "title": "Triple Bacteriana Celular DTP",
        "extra": "Segundo Refuerzo - 5/6 años (Ingreso escolar)",
        "age": 60
    }, {
        "title": "Hepatitis B HB",
        "extra": "Iniciar o completar esquema",
        "age": 132
    }, {
        "title": "Triple Viral SRP",
        "extra": "Iniciar o completar esquema",
        "age": 132
    }, {
        "title": "Triple Bacteriana Acelular dTpa",
        "extra": "Refuerzo",
        "age": 132
    }, {
        "title": "Virus Papiloma Humano VPH",
        "extra": "2 dosis (solo mujeres)",
        "age": 132
    }, {
        "title": "Fiebre Amarilla FA",
        "extra": "Refuerzo",
        "age": 132
    }, {
        "title": "Fiebre Hemorrágica Argentina",
        "extra": "Unica Dosis",
        "age": 180
    }],
    getVaccinesFrom(date: string): IVaccine[] {
        let today = new Date().getTime(),
            born = new Date(date).getTime(),
            month = 1000 * 60 * 60 * 24 * 31, // one month
            diff = Math.floor((today - born) / month);

        return this.items.filter((vaccine: IVaccine) => {
            return vaccine.age >= diff;
        });
    }
};

export default VaccinesService;