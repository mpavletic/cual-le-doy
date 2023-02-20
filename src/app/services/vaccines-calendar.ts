// reference https://bancos.salud.gob.ar/recurso/calendario-nacional-de-vacunacion-2022 => https://bancos.salud.gob.ar/sites/default/files/2022-08/calendario-nacional-vacunacion-2022-08.pdf

const vaccinesCalendar = [
  {
    "title": "BCG",
    "extra": "Unica Dosis",
    "age": 0
  },
  {
    "title": "Hepatitis B",
    "extra": "Dosis neonatal",
    "age": 0
  },
  {
    "title": "Neumococo Conjugada 13 valente",
    "extra": "Primera Dosis",
    "age": 2
  },
  {
    "title": "Quíntuple o Pentavalente",
    "extra": "Primera Dosis",
    "age": 2
  },
  {
    "title": "Rotavirus",
    "extra": "Primera Dosis",
    "age": 2
  },
  {
    "title": "IPV",
    "extra": "Primera Dosis",
    "age": 2
  },
  {
    "title": "Meningococo ACYW",
    "extra": "Primera Dosis",
    "age": 3
  },
  {
    "title": "Neumococo Conjugada 13 valente",
    "extra": "Segunda Dosis",
    "age": 4
  },
  {
    "title": "Quíntuple o Pentavalente",
    "extra": "Segunda Dosis",
    "age": 4
  },
  {
    "title": "Rotavirus",
    "extra": "Segunda Dosis",
    "age": 4
  },
  {
    "title": "IPV",
    "extra": "Segunda Dosis",
    "age": 4
  },
  {
    "title": "Meningococo ACYW",
    "extra": "Segunda Dosis",
    "age": 5
  },
  {
    "title": "Antigripal",
    "extra": "Dosis anual",
    "age": 6
  },
  {
    "title": "Quíntuple o Pentavalente",
    "extra": "Tercer Dosis",
    "age": 6
  },
  {
    "title": "IPV",
    "extra": "Tercer Dosis",
    "age": 6
  },
  {
    "title": "Gripe",
    "extra": "dosis anual entre los 6 y 24 meses",
    "age": 6
  },
  {
    "title": "Neumococo Conjugada 13 valente",
    "extra": "Refuerzo",
    "age": 12
  },
  {
    "title": "Triple Viral",
    "extra": "Primera Dosis",
    "age": 12
  },
  {
    "title": "Hepatitis A",
    "extra": "Única Dosis",
    "age": 12
  },
  {
    "title": "Quíntuple o Pentavalente",
    "extra": "Primer Refuerzo (Entre los 15-18 meses)",
    "age": 15
  },
  {
    "title": "Varicela",
    "extra": "Primera Dosis",
    "age": 15
  },
  {
    "title": "Meningococo ACYW",
    "extra": "Refuerzo",
    "age": 15
  },
  {
    "title": "Fiebre Amarilla FA",
    "extra": "Primera Dosis",
    "age": 18
  },
  {
    "title": "IPV",
    "extra": "Refuerzo - 5/6 años (Ingreso escolar)",
    "age": 60
  },
  {
    "title": "Triple Viral",
    "extra": "Segunda Dosis - 5/6 años (Ingreso escolar)",
    "age": 60
  },
  {
    "title": "Varicela",
    "extra": "Segunda Dosis",
    "age": 60
  },
  {
    "title": "Triple Bacteriana Celular",
    "extra": "Segundo Refuerzo - 5/6 años (Ingreso escolar)",
    "age": 60
  },
  {
    "title": "Meningococo ACYW",
    "extra": "Unica Dosis",
    "age": 132
  },
  {
    "title": "Hepatitis B",
    "extra": "Iniciar o completar esquema",
    "age": 132
  },
  {
    "title": "Triple Viral",
    "extra": "Iniciar o completar esquema",
    "age": 132
  },
  {
    "title": "Triple Bacteriana Acelular",
    "extra": "Refuerzo",
    "age": 132
  },
  {
    "title": "Virus Papiloma Humano VPH",
    "extra": "2 dosis (solo mujeres)",
    "age": 132
  },
  {
    "title": "Fiebre Amarilla FA",
    "extra": "Refuerzo",
    "age": 132
  },
  {
    "title": "Fiebre Hemorrágica Argentina",
    "extra": "Unica Dosis",
    "age": 180
  }
];

export { vaccinesCalendar as ARGVaccinesCalendar };
