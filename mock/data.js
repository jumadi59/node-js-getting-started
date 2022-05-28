const data = [
  {
    "FIELD1": "1",
    "FIELD2": "Argo Bromo Anggrek Pagi",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "08.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "17.00",
    "FIELD7": "09 jam 00 menit"
  },
  {
    "FIELD1": "2",
    "FIELD2": "Argo Bromo Anggrek Pagi",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "09.30",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "18.30",
    "FIELD7": "09 jam 00 menit"
  },
  {
    "FIELD1": "3",
    "FIELD2": "Argo Bromo Anggrek Malam",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "20.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "05.00",
    "FIELD7": "09 jam 00 menit"
  },
  {
    "FIELD1": "4",
    "FIELD2": "Argo Bromo Anggrek Malam",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "21.30",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "06.30",
    "FIELD7": "09 jam 00 menit"
  },
  {
    "FIELD1": "5",
    "FIELD2": "Argo Wilis",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "07.00",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "19.06",
    "FIELD7": "12 jam 06 menit"
  },
  {
    "FIELD1": "6",
    "FIELD2": "Argo Wilis",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "08.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "20.19",
    "FIELD7": "11 jam 49 menit"
  },
  {
    "FIELD1": "7",
    "FIELD2": "Argo Lawu",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "08.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "16.27",
    "FIELD7": "08 jam 27 menit"
  },
  {
    "FIELD1": "7F*",
    "FIELD2": "Argo Lawu Fakultatif",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "09.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "17.50",
    "FIELD7": "08 jam 50 menit"
  },
  {
    "FIELD1": "8",
    "FIELD2": "Argo Lawu",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "20.15",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "04.45",
    "FIELD7": "08 jam 30 menit"
  },
  {
    "FIELD1": "8F*",
    "FIELD2": "Argo Lawu Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "21.15",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "05.55",
    "FIELD7": "08 jam 40 menit"
  },
  {
    "FIELD1": "9",
    "FIELD2": "Argo Dwipangga",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "20.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "04.37",
    "FIELD7": "08 jam 37 menit"
  },
  {
    "FIELD1": "9F*",
    "FIELD2": "Argo Dwipangga Fakultatif",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "21.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "06.06",
    "FIELD7": "08 jam 36 menit"
  },
  {
    "FIELD1": "10",
    "FIELD2": "Argo Dwipangga",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "08.00",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "16.35",
    "FIELD7": "08 jam 35 menit"
  },
  {
    "FIELD1": "10F*",
    "FIELD2": "Argo Dwipangga Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "10.00",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "18.28",
    "FIELD7": "08 jam 28 menit"
  },
  {
    "FIELD1": "11",
    "FIELD2": "Argo Sindoro",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "06.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "12.00",
    "FIELD7": "06 jam 00 menit"
  },
  {
    "FIELD1": "12",
    "FIELD2": "Argo Sindoro",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "16.15",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "22.15",
    "FIELD7": "06 jam 00 menit"
  },
  {
    "FIELD1": "13",
    "FIELD2": "Argo Muria",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "16.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "22.08",
    "FIELD7": "06 jam 08 menit"
  },
  {
    "FIELD1": "14",
    "FIELD2": "Argo Muria",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "07.00",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "13.00",
    "FIELD7": "06 jam 00 menit"
  },
  {
    "FIELD1": "15",
    "FIELD2": "Argo Jati",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "05.25",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "08.27",
    "FIELD7": "03 jam 02 menit"
  },
  {
    "FIELD1": "16",
    "FIELD2": "Argo Jati",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "09.00",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "11.56",
    "FIELD7": "02 jam 56 menit"
  },
  {
    "FIELD1": "17",
    "FIELD2": "Argo Jati",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "13.50",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "16.49",
    "FIELD7": "02 jam 59 menit"
  },
  {
    "FIELD1": "18",
    "FIELD2": "Argo Jati",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "17.20",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "20.16",
    "FIELD7": "02 jam 56 menit"
  },
  {
    "FIELD1": "19",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "05.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "08.15",
    "FIELD7": "03 jam 15 menit"
  },
  {
    "FIELD1": "20",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "05.05",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "08.39",
    "FIELD7": "03 jam 34 menit"
  },
  {
    "FIELD1": "21",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "06.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "09.45",
    "FIELD7": "03 jam 15 menit"
  },
  {
    "FIELD1": "22",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "08.45",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "12.01",
    "FIELD7": "03 jam 16 menit"
  },
  {
    "FIELD1": "23",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "11.35",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "14.57",
    "FIELD7": "03 jam 22 menit"
  },
  {
    "FIELD1": "24",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "10.30",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "13.39",
    "FIELD7": "03 jam 09 menit"
  },
  {
    "FIELD1": "25",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "14.45",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "18.03",
    "FIELD7": "03 jam 18 menit"
  },
  {
    "FIELD1": "26",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "15.30",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "18.39",
    "FIELD7": "03 jam 09 menit"
  },
  {
    "FIELD1": "27",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "16.10",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "19.27",
    "FIELD7": "03 jam 17 menit"
  },
  {
    "FIELD1": "28",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "18.45",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "21.54",
    "FIELD7": "03 jam 09 menit"
  },
  {
    "FIELD1": "29",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "19.40",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "22.56",
    "FIELD7": "03 jam 16 menit"
  },
  {
    "FIELD1": "30",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "20.00",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "23.14",
    "FIELD7": "03 jam 14 menit"
  },
  {
    "FIELD1": "31",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "07.35",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "10.50",
    "FIELD7": "03 jam 15 menit"
  },
  {
    "FIELD1": "32",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "11.30",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "14.53",
    "FIELD7": "03 jam 23 menit"
  },
  {
    "FIELD1": "33",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "08.35",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "11.50",
    "FIELD7": "03 jam 15 menit"
  },
  {
    "FIELD1": "34",
    "FIELD2": "Argo Parahyangan",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "12.35",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "16.00",
    "FIELD7": "03 jam 25 menit"
  },
  {
    "FIELD1": "35F*",
    "FIELD2": "Argo Parahyangan Fakultatif",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "20.55",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "00.16",
    "FIELD7": "03 jam 21 menit"
  },
  {
    "FIELD1": "36F*",
    "FIELD2": "Argo Parahyangan Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "00.45",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "03.47",
    "FIELD7": "03 jam 02 menit"
  },
  {
    "FIELD1": "37F*",
    "FIELD2": "Argo Parahyangan Fakultatif",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "04.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "07.09",
    "FIELD7": "03 jam 09 menit"
  },
  {
    "FIELD1": "38F*",
    "FIELD2": "Argo Parahyangan Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "07.45",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "11.04",
    "FIELD7": "03 jam 19 menit"
  },
  {
    "FIELD1": "39F*",
    "FIELD2": "Argo Jati Fakultatif",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "11.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "14.00",
    "FIELD7": "03 jam 00 menit"
  },
  {
    "FIELD1": "40F*",
    "FIELD2": "Argo Jati Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "07.15",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "10.12",
    "FIELD7": "02 jam 57 menit"
  },
  {
    "FIELD1": "41",
    "FIELD2": "Gajayana",
    "FIELD3": "Malang (ML)",
    "FIELD4": "13.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "04.27",
    "FIELD7": "14 jam 57 menit"
  },
  {
    "FIELD1": "42",
    "FIELD2": "Gajayana",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "17.40",
    "FIELD5": "Malang (ML)",
    "FIELD6": "09.06",
    "FIELD7": "15 jam 26 menit"
  },
  {
    "FIELD1": "43",
    "FIELD2": "Bima",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "17.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "05.43",
    "FIELD7": "12 jam 43 menit"
  },
  {
    "FIELD1": "44",
    "FIELD2": "Bima",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "16.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "05.38",
    "FIELD7": "13 jam 08 menit"
  },
  {
    "FIELD1": "45",
    "FIELD2": "Bima",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "06.20",
    "FIELD5": "Malang (ML)",
    "FIELD6": "08.15",
    "FIELD7": "01 jam 45 menit"
  },
  {
    "FIELD1": "46",
    "FIELD2": "Bima",
    "FIELD3": "Malang (ML)",
    "FIELD4": "14.25",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "16.24",
    "FIELD7": "01 jam 59 menit"
  },
  {
    "FIELD1": "47",
    "FIELD2": "Sembrani",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "17.50",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "04.15",
    "FIELD7": "10 jam 25 menit"
  },
  {
    "FIELD1": "48",
    "FIELD2": "Sembrani",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "19.15",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "05.43",
    "FIELD7": "10 jam 28 menit"
  },
  {
    "FIELD1": "49",
    "FIELD2": "Turangga",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "16.30",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "05.04",
    "FIELD7": "12 jam 34 menit"
  },
  {
    "FIELD1": "50",
    "FIELD2": "Turangga",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "19.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "08.14",
    "FIELD7": "12 jam 44 menit"
  },
  {
    "FIELD1": "51",
    "FIELD2": "Taksaka Pagi",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "08.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "15.42",
    "FIELD7": "07 jam 42 menit"
  },
  {
    "FIELD1": "52",
    "FIELD2": "Taksaka Pagi",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "08.30",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "16.25",
    "FIELD7": "07 jam 55 menit"
  },
  {
    "FIELD1": "53",
    "FIELD2": "Taksaka Malam",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "20.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "03.45",
    "FIELD7": "07 jam 45 menit"
  },
  {
    "FIELD1": "54",
    "FIELD2": "Taksaka Malam",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "20.45",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "04.15",
    "FIELD7": "07 jam 30 menit"
  },
  {
    "FIELD1": "55",
    "FIELD2": "Bangunkarta",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "16.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "04.51",
    "FIELD7": "12 jam 51 menit"
  },
  {
    "FIELD1": "56",
    "FIELD2": "Bangunkarta",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "15.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "03.30",
    "FIELD7": "12 jam 30 menit"
  },
  {
    "FIELD1": "57",
    "FIELD2": "Purwojaya",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "15.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "21.18",
    "FIELD7": "05 jam 48 menit"
  },
  {
    "FIELD1": "58",
    "FIELD2": "Purwojaya",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "22.05",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "03.58",
    "FIELD7": "05 jam 53 menit"
  },
  {
    "FIELD1": "59",
    "FIELD2": "Purwojaya",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "04.15",
    "FIELD5": "Cilacap (CP)",
    "FIELD6": "04.57",
    "FIELD7": "00 jam 42 menit"
  },
  {
    "FIELD1": "60",
    "FIELD2": "Purwojaya",
    "FIELD3": "Cilacap (CP)",
    "FIELD4": "14.30",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "15.12",
    "FIELD7": "00 jam 42 menit"
  },
  {
    "FIELD1": "61",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "05.40",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "10.29",
    "FIELD7": "03 jam 49 menit"
  },
  {
    "FIELD1": "62",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "09.40",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "14.10",
    "FIELD7": "04 jam 30 menit"
  },
  {
    "FIELD1": "63",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "14.50",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "19.12",
    "FIELD7": "04 jam 22 menit"
  },
  {
    "FIELD1": "64",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "11.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "15.47",
    "FIELD7": "04 jam 47 menit"
  },
  {
    "FIELD1": "65",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "17.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "21.35",
    "FIELD7": "04 jam 35 menit"
  },
  {
    "FIELD1": "66",
    "FIELD2": "Tegal Bahari",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "19.45",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "00.21",
    "FIELD7": "04 jam 36 menit"
  },
  {
    "FIELD1": "67",
    "FIELD2": "Cirebon Ekspres",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "05.50",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "09.05",
    "FIELD7": "03 jam 15 menit"
  },
  {
    "FIELD1": "68",
    "FIELD2": "Cirebon Ekspres",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "12.10",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "15.18",
    "FIELD7": "03 jam 08 menit"
  },
  {
    "FIELD1": "69",
    "FIELD2": "Cirebon Ekspres",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "08.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "11.37",
    "FIELD7": "03 jam 07 menit"
  },
  {
    "FIELD1": "70",
    "FIELD2": "Cirebon Ekspres",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "22.20",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "01.27",
    "FIELD7": "03 jam 07 menit"
  },
  {
    "FIELD1": "71F*",
    "FIELD2": "Cirebon Ekspres Fakultatif",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "16.45",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "19.55",
    "FIELD7": "03 jam 10 menit"
  },
  {
    "FIELD1": "72F*",
    "FIELD2": "Cirebon Ekspres Fakultatif",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "20.30",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "23.34",
    "FIELD7": "03 jam 04 menit"
  },
  {
    "FIELD1": "73",
    "FIELD2": "Harina",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "16.30",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "01.55",
    "FIELD7": "09 jam 25 menit"
  },
  {
    "FIELD1": "74",
    "FIELD2": "Harina",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "23.58",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "09.37",
    "FIELD7": "09 jam 39 menit"
  },
  {
    "FIELD1": "75",
    "FIELD2": "Harina",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "21.25",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "23.33",
    "FIELD7": "02 jam 08 menit"
  },
  {
    "FIELD1": "76",
    "FIELD2": "Harina",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "02.15",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "04.11",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "77",
    "FIELD2": "Gumarang",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "15.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "02.31",
    "FIELD7": "11 jam 01 menit"
  },
  {
    "FIELD1": "78",
    "FIELD2": "Gumarang",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "15.45",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "02.56",
    "FIELD7": "11 jam 11 menit"
  },
  {
    "FIELD1": "79",
    "FIELD2": "Lodaya Pagi",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "07.10",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "15.48",
    "FIELD7": "08 jam 38 menit"
  },
  {
    "FIELD1": "80",
    "FIELD2": "Lodaya Pagi",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "07.20",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "16.15",
    "FIELD7": "08 jam 55 menit"
  },
  {
    "FIELD1": "81",
    "FIELD2": "Lodaya Malam",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "19.10",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "04.15",
    "FIELD7": "09 jam 05 menit"
  },
  {
    "FIELD1": "82",
    "FIELD2": "Lodaya Malam",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "18.55",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "03.58",
    "FIELD7": "09 jam 03 menit"
  },
  {
    "FIELD1": "83",
    "FIELD2": "Sancaka Pagi",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "07.30",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "12.45",
    "FIELD7": "05 jam 15 menit"
  },
  {
    "FIELD1": "84",
    "FIELD2": "Sancaka Pagi",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "06.45",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "11.37",
    "FIELD7": "04 jam 52 menit"
  },
  {
    "FIELD1": "85",
    "FIELD2": "Sancaka Malam",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "17.25",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "22.32",
    "FIELD7": "05 jam 07 menit"
  },
  {
    "FIELD1": "86",
    "FIELD2": "Sancaka Malam",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "16.40",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "21.55",
    "FIELD7": "05 jam 15 menit"
  },
  {
    "FIELD1": "87",
    "FIELD2": "Mutiara Timur Siang",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "09.00",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "15.20",
    "FIELD7": "06 jam 20 menit"
  },
  {
    "FIELD1": "88",
    "FIELD2": "Mutiara Timur Siang",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "09.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "15.17",
    "FIELD7": "06 jam 17 menit"
  },
  {
    "FIELD1": "89",
    "FIELD2": "Mutiara Timur Malam",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "22.00",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "04.15",
    "FIELD7": "06 jam 15 menit"
  },
  {
    "FIELD1": "90",
    "FIELD2": "Mutiara Timur Malam",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "22.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "04.17",
    "FIELD7": "06 jam 17 menit"
  },
  {
    "FIELD1": "91",
    "FIELD2": "Malabar",
    "FIELD3": "Malang (ML)",
    "FIELD4": "16.00",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "07.48",
    "FIELD7": "15 jam 48 menit"
  },
  {
    "FIELD1": "92",
    "FIELD2": "Malabar",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "15.45",
    "FIELD5": "Malang (ML)",
    "FIELD6": "07.05",
    "FIELD7": "15 jam 20 menit"
  },
  {
    "FIELD1": "93",
    "FIELD2": "Malioboro Ekspres Siang",
    "FIELD3": "Malang (ML)",
    "FIELD4": "08.20",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "15.35",
    "FIELD7": "07 jam 15 menit"
  },
  {
    "FIELD1": "94",
    "FIELD2": "Malioboro Ekspres Siang",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "07.45",
    "FIELD5": "Malang (ML)",
    "FIELD6": "15.43",
    "FIELD7": "07 jam 58 menit"
  },
  {
    "FIELD1": "95",
    "FIELD2": "Malioboro Ekspres Malam",
    "FIELD3": "Malang (ML)",
    "FIELD4": "20.10",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "03.35",
    "FIELD7": "07 jam 25 menit"
  },
  {
    "FIELD1": "96",
    "FIELD2": "Malioboro Ekspres Malam",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "20.45",
    "FIELD5": "Malang (ML)",
    "FIELD6": "03.49",
    "FIELD7": "07 jam 04 menit"
  },
  {
    "FIELD1": "97",
    "FIELD2": "Ciremai",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "17.35",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "22.48",
    "FIELD7": "05 jam 13 menit"
  },
  {
    "FIELD1": "98",
    "FIELD2": "Ciremai",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "08.40",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "13.45",
    "FIELD7": "05 jam 05 menit"
  },
  {
    "FIELD1": "99",
    "FIELD2": "Ciremai",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "06.15",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "08.10",
    "FIELD7": "01 jam 55 menit"
  },
  {
    "FIELD1": "100",
    "FIELD2": "Ciremai",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "23.14",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "01.11",
    "FIELD7": "01 jam 57 menit"
  },
  {
    "FIELD1": "101",
    "FIELD2": "Ranggajati",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "09.15",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "19.52",
    "FIELD7": "10 jam 37 menit"
  },
  {
    "FIELD1": "102",
    "FIELD2": "Ranggajati",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "05.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "15.27",
    "FIELD7": "10 jam 27 menit"
  },
  {
    "FIELD1": "103",
    "FIELD2": "Ranggajati",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "16.15",
    "FIELD5": "Jember (JR)",
    "FIELD6": "20.10",
    "FIELD7": "03 jam 55 menit"
  },
  {
    "FIELD1": "104",
    "FIELD2": "Ranggajati",
    "FIELD3": "Jember (JR)",
    "FIELD4": "05.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "08.45",
    "FIELD7": "03 jam 45 menit"
  },
  {
    "FIELD1": "105",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "106",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "107",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "108",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "109",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "110",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "111",
    "FIELD2": "Mutiara Selatan",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "19.00",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "08.33",
    "FIELD7": "13 jam 33 menit"
  },
  {
    "FIELD1": "112",
    "FIELD2": "Mutiara Selatan",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "16.50",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "06.24",
    "FIELD7": ""
  },
  {
    "FIELD1": "113",
    "FIELD2": "Mutiara Selatan",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "07.20",
    "FIELD5": "Malang (ML)",
    "FIELD6": "09.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "114",
    "FIELD2": "Mutiara Selatan",
    "FIELD3": "Malang (ML)",
    "FIELD4": "16.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "19.00",
    "FIELD7": "02 jam 30 menit"
  },
  {
    "FIELD1": "115",
    "FIELD2": "Senja Utama Solo",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "17.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "02.54",
    "FIELD7": ""
  },
  {
    "FIELD1": "116",
    "FIELD2": "Senja Utama Solo",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "22.00",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "06.55",
    "FIELD7": "08 jam 55 menit"
  },
  {
    "FIELD1": "117",
    "FIELD2": "Fajar Utama Yogya",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "07.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "15.02",
    "FIELD7": "08 jam 02 menit"
  },
  {
    "FIELD1": "118",
    "FIELD2": "Fajar Utama Yogya",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "06.15",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "14.35",
    "FIELD7": "08 jam 20 menit"
  },
  {
    "FIELD1": "119",
    "FIELD2": "Senja Utama Yogya",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "17.45",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "02.05",
    "FIELD7": ""
  },
  {
    "FIELD1": "120",
    "FIELD2": "Senja Utama Yogya",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "19.00",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "03.13",
    "FIELD7": "08 jam 13 menit"
  },
  {
    "FIELD1": "121",
    "FIELD2": "Sawunggalih Pagi",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "07.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "14.18",
    "FIELD7": "07 jam 18 menit"
  },
  {
    "FIELD1": "122",
    "FIELD2": "Sawunggalih Pagi",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "08.15",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "15.19",
    "FIELD7": ""
  },
  {
    "FIELD1": "123",
    "FIELD2": "Sawunggalih Malam",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "19.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "02.17",
    "FIELD7": "07 jam 17 menit"
  },
  {
    "FIELD1": "124",
    "FIELD2": "Sawunggalih Malam",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "18.30",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "01.44",
    "FIELD7": ""
  },
  {
    "FIELD1": "125F*",
    "FIELD2": "Fajar Utama Cirebon",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "15.10",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "18.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "126F*",
    "FIELD2": "Senja Utama Cirebon",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "05.45",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "08.45",
    "FIELD7": "03 jam 00 menit"
  },
  {
    "FIELD1": "127F*",
    "FIELD2": "Sidomukti",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "10.00",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "11.02",
    "FIELD7": "01 jam 02 menit"
  },
  {
    "FIELD1": "128F*",
    "FIELD2": "Sidomukti",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "11.45",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "12.48",
    "FIELD7": ""
  },
  {
    "FIELD1": "129",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "130",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "131",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "132",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "133",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "134",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "135",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "136",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "137",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "138",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "139",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "140",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "141",
    "FIELD2": "Majapahit",
    "FIELD3": "Malang (ML)",
    "FIELD4": "18.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "10.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "142",
    "FIELD2": "Majapahit",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "18.15",
    "FIELD5": "Malang (ML)",
    "FIELD6": "10.05",
    "FIELD7": ""
  },
  {
    "FIELD1": "143",
    "FIELD2": "Jayabaya",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "14.15",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "01.34",
    "FIELD7": ""
  },
  {
    "FIELD1": "144",
    "FIELD2": "Jayabaya",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "13.00",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "00.05",
    "FIELD7": "11 jam 05 menit"
  },
  {
    "FIELD1": "145",
    "FIELD2": "Jayabaya",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "00.20",
    "FIELD5": "Malang (ML)",
    "FIELD6": "02.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "146",
    "FIELD2": "Jayabaya",
    "FIELD3": "Malang (ML)",
    "FIELD4": "11.45",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "14.03",
    "FIELD7": ""
  },
  {
    "FIELD1": "147",
    "FIELD2": "Jaka Tingkir",
    "FIELD3": "Purwosari (PWS)",
    "FIELD4": "18.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "03.30",
    "FIELD7": "09 jam 30 menit"
  },
  {
    "FIELD1": "148",
    "FIELD2": "Jaka Tingkir",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "12.00",
    "FIELD5": "Purwosari (PWS)",
    "FIELD6": "21.45",
    "FIELD7": "09 jam 45 menit"
  },
  {
    "FIELD1": "149",
    "FIELD2": "Menoreh",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "08.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "14.30",
    "FIELD7": "06 jam 30 menit"
  },
  {
    "FIELD1": "150",
    "FIELD2": "Menoreh",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "20.30",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "03.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "151",
    "FIELD2": "Bogowonto",
    "FIELD3": "Lempuyangan (LPN)",
    "FIELD4": "09.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "17.29",
    "FIELD7": "08 jam 29 menit"
  },
  {
    "FIELD1": "152",
    "FIELD2": "Bogowonto",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "21.45",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "05.52",
    "FIELD7": ""
  },
  {
    "FIELD1": "153",
    "FIELD2": "Gajahwong",
    "FIELD3": "Lempuyangan (LPN)",
    "FIELD4": "18.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "02.43",
    "FIELD7": "08 jam 43 menit"
  },
  {
    "FIELD1": "154",
    "FIELD2": "Gajahwong",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "06.45",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "15.00",
    "FIELD7": "08 jam 15 menit"
  },
  {
    "FIELD1": "155",
    "FIELD2": "Singasari",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "06.40",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "22.33",
    "FIELD7": ""
  },
  {
    "FIELD1": "156",
    "FIELD2": "Singasari",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "12.25",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "03.20",
    "FIELD7": ""
  },
  {
    "FIELD1": "159",
    "FIELD2": "Joglokerto",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "06.00",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "10.08",
    "FIELD7": "04 jam 08 menit"
  },
  {
    "FIELD1": "160",
    "FIELD2": "Joglokerto",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "10.40",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "14.56",
    "FIELD7": "04 jam 16 menit"
  },
  {
    "FIELD1": "161",
    "FIELD2": "Ambarawa Ekspres",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "12.45",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "17.31",
    "FIELD7": ""
  },
  {
    "FIELD1": "162",
    "FIELD2": "Ambarawa Ekspres",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "07.00",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "11.51",
    "FIELD7": "04 jam 51 menit"
  },
  {
    "FIELD1": "171",
    "FIELD2": "Matarmaja",
    "FIELD3": "Malang (ML)",
    "FIELD4": "17.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "09.20",
    "FIELD7": ""
  },
  {
    "FIELD1": "172",
    "FIELD2": "Matarmaja",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "15.15",
    "FIELD5": "Malang (ML)",
    "FIELD6": "07.51",
    "FIELD7": ""
  },
  {
    "FIELD1": "173",
    "FIELD2": "Gaya Baru Malam Selatan",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "12.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "01.55",
    "FIELD7": "13 jam 55 menit"
  },
  {
    "FIELD1": "174",
    "FIELD2": "Gaya Baru Malam Selatan",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "10.15",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "01.35",
    "FIELD7": ""
  },
  {
    "FIELD1": "175",
    "FIELD2": "Brantas",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "12.50",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "03.54",
    "FIELD7": ""
  },
  {
    "FIELD1": "176",
    "FIELD2": "Brantas",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "17.00",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "07.50",
    "FIELD7": "14 jam 50 menit"
  },
  {
    "FIELD1": "177",
    "FIELD2": "Kertajaya",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "21.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "08.40",
    "FIELD7": "11 jam 40 menit"
  },
  {
    "FIELD1": "178",
    "FIELD2": "Kertajaya",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "14.00",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "01.40",
    "FIELD7": "11 jam 40 menit"
  },
  {
    "FIELD1": "179",
    "FIELD2": "Pasundan",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "08.10",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "23.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "180",
    "FIELD2": "Pasundan",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "05.35",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "21.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "181",
    "FIELD2": "Kahuripan",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "12.10",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "02.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "182",
    "FIELD2": "Kahuripan",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "18.10",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "08.31",
    "FIELD7": ""
  },
  {
    "FIELD1": "183",
    "FIELD2": "Bengawan",
    "FIELD3": "Purwosari (PWS)",
    "FIELD4": "14.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "00.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "184",
    "FIELD2": "Bengawan",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "11.20",
    "FIELD5": "Purwosari (PWS)",
    "FIELD6": "20.40",
    "FIELD7": ""
  },
  {
    "FIELD1": "185",
    "FIELD2": "Progo",
    "FIELD3": "Lempuyangan (LPN)",
    "FIELD4": "14.45",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "23.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "186",
    "FIELD2": "Progo",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "22.20",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "06.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "187",
    "FIELD2": "Logawa",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "10.45",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "19.45",
    "FIELD7": ""
  },
  {
    "FIELD1": "188",
    "FIELD2": "Logawa",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "05.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "14.59",
    "FIELD7": ""
  },
  {
    "FIELD1": "189",
    "FIELD2": "Logawa",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "15.30",
    "FIELD5": "Jember (JR)",
    "FIELD6": "19.35",
    "FIELD7": ""
  },
  {
    "FIELD1": "190",
    "FIELD2": "Logawa",
    "FIELD3": "Jember (JR)",
    "FIELD4": "06.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "10.17",
    "FIELD7": "04 jam 17 menit"
  },
  {
    "FIELD1": "191",
    "FIELD2": "Kutojaya Utara",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "17.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "00.56",
    "FIELD7": "07 jam 56 menit"
  },
  {
    "FIELD1": "192",
    "FIELD2": "Kutojaya Utara",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "05.25",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "13.09",
    "FIELD7": ""
  },
  {
    "FIELD1": "193",
    "FIELD2": "Sri Tanjung",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "13.30",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "19.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "194",
    "FIELD2": "Sri Tanjung",
    "FIELD3": "Lempuyangan (LPN)",
    "FIELD4": "07.00",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "13.27",
    "FIELD7": "06 jam 27 menit"
  },
  {
    "FIELD1": "195",
    "FIELD2": "Sri Tanjung",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "14.00",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "20.50",
    "FIELD7": "06 jam 50 menit"
  },
  {
    "FIELD1": "196",
    "FIELD2": "Sri Tanjung",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "06.30",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "13.01",
    "FIELD7": ""
  },
  {
    "FIELD1": "201",
    "FIELD2": "Tawang Jaya",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "13.15",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "20.10",
    "FIELD7": ""
  },
  {
    "FIELD1": "202",
    "FIELD2": "Tawang Jaya",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "23.00",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "06.15",
    "FIELD7": "07 jam 15 menit"
  },
  {
    "FIELD1": "203",
    "FIELD2": "Kutojaya Selatan",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "09.20",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "16.41",
    "FIELD7": ""
  },
  {
    "FIELD1": "204",
    "FIELD2": "Kutojaya Selatan",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "21.00",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "04.31",
    "FIELD7": "07 jam 31 menit"
  },
  {
    "FIELD1": "205",
    "FIELD2": "Tawang Alun",
    "FIELD3": "Bangil (BG)",
    "FIELD4": "17.45",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "23.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "206",
    "FIELD2": "Tawang Alun",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "05.00",
    "FIELD5": "Bangil (BG)",
    "FIELD6": "10.57",
    "FIELD7": "05 jam 57 menit"
  },
  {
    "FIELD1": "207",
    "FIELD2": "Tawang Alun",
    "FIELD3": "Bangil (BG)",
    "FIELD4": "11.25",
    "FIELD5": "Malangkotalama (MLK)",
    "FIELD6": "12.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "208",
    "FIELD2": "Tawang Alun",
    "FIELD3": "Malangkotalama (MLK)",
    "FIELD4": "15.50",
    "FIELD5": "Bangil (BG)",
    "FIELD6": "17.10",
    "FIELD7": ""
  },
  {
    "FIELD1": "209",
    "FIELD2": "Tegal Ekspres",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "13.50",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "18.41",
    "FIELD7": ""
  },
  {
    "FIELD1": "210",
    "FIELD2": "Tegal Ekspres",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "07.35",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "12.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "211",
    "FIELD2": "Maharani",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "06.00",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "10.41",
    "FIELD7": "04 jam 41 menit"
  },
  {
    "FIELD1": "212",
    "FIELD2": "Maharani",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "11.40",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "16.27",
    "FIELD7": ""
  },
  {
    "FIELD1": "213",
    "FIELD2": "Probowangi",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "04.25",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "11.40",
    "FIELD7": ""
  },
  {
    "FIELD1": "214",
    "FIELD2": "Probowangi",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "13.50",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "21.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "215",
    "FIELD2": "Serayu Pagi",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "07.25",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "17.13",
    "FIELD7": ""
  },
  {
    "FIELD1": "216",
    "FIELD2": "Serayu Pagi",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "09.15",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "19.13",
    "FIELD7": ""
  },
  {
    "FIELD1": "217",
    "FIELD2": "Serayu Pagi",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "19.30",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "19.59",
    "FIELD7": "00 jam 29 menit"
  },
  {
    "FIELD1": "218",
    "FIELD2": "Serayu Pagi",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "06.30",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "06.58",
    "FIELD7": "00 jam 28 menit"
  },
  {
    "FIELD1": "219",
    "FIELD2": "Serayu Malam",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "17.25",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "04.02",
    "FIELD7": ""
  },
  {
    "FIELD1": "220",
    "FIELD2": "Serayu Malam",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "21.00",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "07.21",
    "FIELD7": ""
  },
  {
    "FIELD1": "221",
    "FIELD2": "Serayu Malam",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "07.40",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "08.08",
    "FIELD7": "00 jam 28 menit"
  },
  {
    "FIELD1": "222",
    "FIELD2": "Serayu Malam",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "16.30",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "16.58",
    "FIELD7": "00 jam 28 menit"
  },
  {
    "FIELD1": "223",
    "FIELD2": "Kamandaka",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "05.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "06.49",
    "FIELD7": "01 jam 49 menit"
  },
  {
    "FIELD1": "224",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "07.40",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "09.27",
    "FIELD7": ""
  },
  {
    "FIELD1": "225",
    "FIELD2": "Kamandaka",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "05.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "07.33",
    "FIELD7": "02 jam 33 menit"
  },
  {
    "FIELD1": "226",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "07.00",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "09.39",
    "FIELD7": "02 jam 39 menit"
  },
  {
    "FIELD1": "227",
    "FIELD2": "Kamandaka",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "10.25",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "12.11",
    "FIELD7": ""
  },
  {
    "FIELD1": "228",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "14.04",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "16.04",
    "FIELD7": "02 jam 00 menit"
  },
  {
    "FIELD1": "229",
    "FIELD2": "Kamandaka",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "11.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "13.56",
    "FIELD7": "03 jam 56 menit"
  },
  {
    "FIELD1": "230",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "12.17",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "14.49",
    "FIELD7": "02 jam 32 menit"
  },
  {
    "FIELD1": "231",
    "FIELD2": "Kamandaka",
    "FIELD3": "Purwokerto (PWT)",
    "FIELD4": "17.15",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "19.03",
    "FIELD7": ""
  },
  {
    "FIELD1": "232",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "19.52",
    "FIELD5": "Purwokerto (PWT)",
    "FIELD6": "21.53",
    "FIELD7": "02 jam 01 menit"
  },
  {
    "FIELD1": "233",
    "FIELD2": "Kamandaka",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "17.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "19.38",
    "FIELD7": "02 jam 38 menit"
  },
  {
    "FIELD1": "234",
    "FIELD2": "Kamandaka",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "19.08",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "21.41",
    "FIELD7": ""
  },
  {
    "FIELD1": "235",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "236",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "237",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "238",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "239",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "240",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "241",
    "FIELD2": "Blora Jaya",
    "FIELD3": "Cepu (CU)",
    "FIELD4": "05.00",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "07.49",
    "FIELD7": ""
  },
  {
    "FIELD1": "242",
    "FIELD2": "Blora Jaya",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "19.10",
    "FIELD5": "Cepu (CU)",
    "FIELD6": "21.34",
    "FIELD7": ""
  },
  {
    "FIELD1": "243",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "244",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "245",
    "FIELD2": "Kedung Sepur",
    "FIELD3": "Ngrombo (NBO)",
    "FIELD4": "07.50",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "09.30",
    "FIELD7": "01 jam 40 menit"
  },
  {
    "FIELD1": "246",
    "FIELD2": "Kedung Sepur",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "05.45",
    "FIELD5": "Ngrombo (NBO)",
    "FIELD6": "07.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "247",
    "FIELD2": "Kedung Sepur",
    "FIELD3": "Ngrombo (NBO)",
    "FIELD4": "17.55",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "19.34",
    "FIELD7": "01 jam 39 menit"
  },
  {
    "FIELD1": "248",
    "FIELD2": "Kedung Sepur",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "15.45",
    "FIELD5": "Ngrombo (NBO)",
    "FIELD6": "17.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "249",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "04.30",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "05.40",
    "FIELD7": "01 jam 10 menit"
  },
  {
    "FIELD1": "250",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "05.30",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "06.42",
    "FIELD7": "01 jam 12 menit"
  },
  {
    "FIELD1": "251",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "05.10",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "07.32",
    "FIELD7": ""
  },
  {
    "FIELD1": "252",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "06.00",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "08.30",
    "FIELD7": "02 jam 30 menit"
  },
  {
    "FIELD1": "253",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "07.20",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "08.36",
    "FIELD7": ""
  },
  {
    "FIELD1": "254",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "09.05",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "10.17",
    "FIELD7": ""
  },
  {
    "FIELD1": "255",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "09.10",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "10.22",
    "FIELD7": "01 jam 12 menit"
  },
  {
    "FIELD1": "256",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "08.35",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "11.12",
    "FIELD7": ""
  },
  {
    "FIELD1": "257",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "10.40",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "11.55",
    "FIELD7": "01 jam 15 menit"
  },
  {
    "FIELD1": "258",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "10.45",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "11.58",
    "FIELD7": "01 jam 13 menit"
  },
  {
    "FIELD1": "259",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "12.15",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "14.39",
    "FIELD7": "02 jam 24 menit"
  },
  {
    "FIELD1": "260",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "12.30",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "13.46",
    "FIELD7": "01 jam 16 menit"
  },
  {
    "FIELD1": "261",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "13.05",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "14.20",
    "FIELD7": "01 jam 15 menit"
  },
  {
    "FIELD1": "262",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "14.40",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "15.54",
    "FIELD7": "01 jam 14 menit"
  },
  {
    "FIELD1": "263",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "14.00",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "15.15",
    "FIELD7": "01 jam 15 menit"
  },
  {
    "FIELD1": "264",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "16.05",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "17.18",
    "FIELD7": "01 jam 13 menit"
  },
  {
    "FIELD1": "265",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "16.10",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "18.30",
    "FIELD7": "02 jam 20 menit"
  },
  {
    "FIELD1": "266",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "15.50",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "18.18",
    "FIELD7": "02 jam 28 menit"
  },
  {
    "FIELD1": "267",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "18.00",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "19.20",
    "FIELD7": "01 jam 20 menit"
  },
  {
    "FIELD1": "268",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "18.50",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "21.17",
    "FIELD7": ""
  },
  {
    "FIELD1": "269",
    "FIELD2": "Prambanan Ekspres",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "18.40",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "19.52",
    "FIELD7": ""
  },
  {
    "FIELD1": "270",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "271",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "272",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "273",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "274",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "275",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Sidotopo (SDT)",
    "FIELD4": "04.00",
    "FIELD5": "Porong (PR)",
    "FIELD6": "04.54",
    "FIELD7": "00 jam 54 menit"
  },
  {
    "FIELD1": "276",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Porong (PR)",
    "FIELD4": "05.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "07.05",
    "FIELD7": "01 jam 20 menit"
  },
  {
    "FIELD1": "277",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "12.30",
    "FIELD5": "Porong (PR)",
    "FIELD6": "14.21",
    "FIELD7": "01 jam 51 menit"
  },
  {
    "FIELD1": "278",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Porong (PR)",
    "FIELD4": "15.00",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "17.01",
    "FIELD7": "02 jam 01 menit"
  },
  {
    "FIELD1": "279",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "17.50",
    "FIELD5": "Porong (PR)",
    "FIELD6": "19.24",
    "FIELD7": ""
  },
  {
    "FIELD1": "280",
    "FIELD2": "Komuter (Delta Ekspres)",
    "FIELD3": "Porong (PR)",
    "FIELD4": "19.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "21.05",
    "FIELD7": ""
  },
  {
    "FIELD1": "281",
    "FIELD2": "Komuter Sulam",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "04.35",
    "FIELD5": "Lamongan (LMG)",
    "FIELD6": "05.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "282",
    "FIELD2": "Komuter Sulam",
    "FIELD3": "Lamongan (LMG)",
    "FIELD4": "06.15",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "07.18",
    "FIELD7": ""
  },
  {
    "FIELD1": "283",
    "FIELD2": "Komuter Sulam",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "16.40",
    "FIELD5": "Lamongan (LMG)",
    "FIELD6": "17.43",
    "FIELD7": ""
  },
  {
    "FIELD1": "284",
    "FIELD2": "Komuter Sulam",
    "FIELD3": "Lamongan (LMG)",
    "FIELD4": "18.10",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "19.27",
    "FIELD7": ""
  },
  {
    "FIELD1": "285",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidotopo (SDT)",
    "FIELD4": "03.45",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "04.47",
    "FIELD7": "01 jam 02 menit"
  },
  {
    "FIELD1": "286",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "05.25",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "06.10",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "287",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "06.30",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "07.15",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "288",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "07.50",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "08.35",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "289",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "09.05",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "10.04",
    "FIELD7": "00 jam 59 menit"
  },
  {
    "FIELD1": "290",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "10.20",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "11.05",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "291",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "11.20",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "12.05",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "292",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "12.55",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "14.29",
    "FIELD7": ""
  },
  {
    "FIELD1": "293",
    "FIELD2": "Jenggala",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "13.30",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "14.49",
    "FIELD7": "01 jam 19 menit"
  },
  {
    "FIELD1": "294",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "15.05",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "15.52",
    "FIELD7": "00 jam 47 menit"
  },
  {
    "FIELD1": "295",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "16.05",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "16.50",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "296",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "18.10",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "18.55",
    "FIELD7": "00 jam 45 menit"
  },
  {
    "FIELD1": "297",
    "FIELD2": "Jenggala",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "19.15",
    "FIELD5": "Mojokerto (MR)",
    "FIELD6": "20.05",
    "FIELD7": "00 jam 50 menit"
  },
  {
    "FIELD1": "298",
    "FIELD2": "Jenggala",
    "FIELD3": "Mojokerto (MR)",
    "FIELD4": "20.20",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "21.31",
    "FIELD7": "01 jam 11 menit"
  },
  {
    "FIELD1": "299",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "300",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "301",
    "FIELD2": "Bathara Kresna",
    "FIELD3": "Wonogiri (WNG)",
    "FIELD4": "06.00",
    "FIELD5": "Purwosari (PWS)",
    "FIELD6": "07.45",
    "FIELD7": "01 jam 45 menit"
  },
  {
    "FIELD1": "302",
    "FIELD2": "Bathara Kresna",
    "FIELD3": "Purwosari (PWS)",
    "FIELD4": "04.00",
    "FIELD5": "Wonogiri (WNG)",
    "FIELD6": "05.45",
    "FIELD7": "01 jam 45 menit"
  },
  {
    "FIELD1": "303",
    "FIELD2": "Bathara Kresna",
    "FIELD3": "Wonogiri (WNG)",
    "FIELD4": "10.00",
    "FIELD5": "Purwosari (PWS)",
    "FIELD6": "11.45",
    "FIELD7": "01 jam 45 menit"
  },
  {
    "FIELD1": "304",
    "FIELD2": "Bathara Kresna",
    "FIELD3": "Purwosari (PWS)",
    "FIELD4": "08.00",
    "FIELD5": "Wonogiri (WNG)",
    "FIELD6": "09.45",
    "FIELD7": "01 jam 45 menit"
  },
  {
    "FIELD1": "305",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "306",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "307",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "308",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "309",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "310",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "311",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "312",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "313",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "314",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "315",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "316",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "317",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "318",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "319",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "320",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "321A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Purwakarta (PWK)",
    "FIELD4": "05.20",
    "FIELD5": "Tanjung Priok (TPK)",
    "FIELD6": "08.16",
    "FIELD7": ""
  },
  {
    "FIELD1": "322A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Tanjung Priok (TPK)",
    "FIELD4": "16.15",
    "FIELD5": "Purwakarta (PWK)",
    "FIELD6": "19.06",
    "FIELD7": ""
  },
  {
    "FIELD1": "323A",
    "FIELD2": "Jatiluhur",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "04.35",
    "FIELD5": "Tanjung Priok (TPK)",
    "FIELD6": "06.47",
    "FIELD7": ""
  },
  {
    "FIELD1": "324A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Tanjung Priok (TPK)",
    "FIELD4": "09.55",
    "FIELD5": "Purwakarta (PWK)",
    "FIELD6": "12.33",
    "FIELD7": ""
  },
  {
    "FIELD1": "325A",
    "FIELD2": "Jatiluhur",
    "FIELD3": "Cikampek (CKP)",
    "FIELD4": "05.00",
    "FIELD5": "Tanjung Priok (TPK)",
    "FIELD6": "07.18",
    "FIELD7": "02 jam 18 menit"
  },
  {
    "FIELD1": "326A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Tanjung Priok (TPK)",
    "FIELD4": "11.05",
    "FIELD5": "Purwakarta (PWK)",
    "FIELD6": "13.45",
    "FIELD7": "02 jam 40 menit"
  },
  {
    "FIELD1": "327A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Purwakarta (PWK)",
    "FIELD4": "13.40",
    "FIELD5": "Tanjung Priok (TPK)",
    "FIELD6": "16.40",
    "FIELD7": "03 jam 00 menit"
  },
  {
    "FIELD1": "328A",
    "FIELD2": "Jatiluhur",
    "FIELD3": "Tanjung Priok (TPK)",
    "FIELD4": "17.10",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "19.30",
    "FIELD7": "02 jam 20 menit"
  },
  {
    "FIELD1": "329A",
    "FIELD2": "Walahar Ekspres",
    "FIELD3": "Purwakarta (PWK)",
    "FIELD4": "14.25",
    "FIELD5": "Tanjung Priok (TPK)",
    "FIELD6": "17.14",
    "FIELD7": ""
  },
  {
    "FIELD1": "330A",
    "FIELD2": "Jatiluhur",
    "FIELD3": "Tanjung Priok (TPK)",
    "FIELD4": "19.05",
    "FIELD5": "Cikampek (CKP)",
    "FIELD6": "21.10",
    "FIELD7": "02 jam 05 menit"
  },
  {
    "FIELD1": "331",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "332",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "04.40",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "05.22",
    "FIELD7": ""
  },
  {
    "FIELD1": "333",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "06.00",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "07.30",
    "FIELD7": "01 jam 30 menit"
  },
  {
    "FIELD1": "334",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "09.00",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "09.52",
    "FIELD7": "00 jam 52 menit"
  },
  {
    "FIELD1": "335",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "336F*",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "09.55",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "10.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "337F*",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "11.35",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "13.01",
    "FIELD7": ""
  },
  {
    "FIELD1": "338F*",
    "FIELD2": "Patas Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "13.55",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "14.32",
    "FIELD7": ""
  },
  {
    "FIELD1": "339",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "340",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "341",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "342",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "03.30",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "04.10",
    "FIELD7": ""
  },
  {
    "FIELD1": "343",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "04.45",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "06.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "344",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "06.50",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "08.46",
    "FIELD7": ""
  },
  {
    "FIELD1": "345",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "09.25",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "11.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "346",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "11.50",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "13.45",
    "FIELD7": ""
  },
  {
    "FIELD1": "347",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "14.10",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "15.46",
    "FIELD7": ""
  },
  {
    "FIELD1": "348",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "16.15",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "18.04",
    "FIELD7": ""
  },
  {
    "FIELD1": "349",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "18.45",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "20.46",
    "FIELD7": ""
  },
  {
    "FIELD1": "350",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "19.25",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "21.07",
    "FIELD7": ""
  },
  {
    "FIELD1": "351",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "352",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "04.10",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "05.01",
    "FIELD7": "00 jam 51 menit"
  },
  {
    "FIELD1": "353",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "05.25",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "07.23",
    "FIELD7": ""
  },
  {
    "FIELD1": "354",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "07.50",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "09.39",
    "FIELD7": ""
  },
  {
    "FIELD1": "355",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "10.05",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "11.45",
    "FIELD7": ""
  },
  {
    "FIELD1": "356",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "12.10",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "14.02",
    "FIELD7": ""
  },
  {
    "FIELD1": "357",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "14.35",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "16.36",
    "FIELD7": ""
  },
  {
    "FIELD1": "358",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "17.10",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "19.05",
    "FIELD7": ""
  },
  {
    "FIELD1": "359",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "19.30",
    "FIELD5": "Purwakarta (PWK)",
    "FIELD6": "00.08",
    "FIELD7": "04 jam 38 menit"
  },
  {
    "FIELD1": "360",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Purwakarta (PWK)",
    "FIELD4": "04.20",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "08.24",
    "FIELD7": ""
  },
  {
    "FIELD1": "361",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "09.00",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "10.39",
    "FIELD7": "01 jam 39 menit"
  },
  {
    "FIELD1": "362",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "11.00",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "12.39",
    "FIELD7": "01 jam 39 menit"
  },
  {
    "FIELD1": "363",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "13.05",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "14.55",
    "FIELD7": "01 jam 50 menit"
  },
  {
    "FIELD1": "364",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "15.25",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "17.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "365",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "17.30",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "19.01",
    "FIELD7": "01 jam 31 menit"
  },
  {
    "FIELD1": "366",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "21.10",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "22.46",
    "FIELD7": "01 jam 36 menit"
  },
  {
    "FIELD1": "367",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "23.10",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "00.12",
    "FIELD7": ""
  },
  {
    "FIELD1": "368",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "00.35",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "00.57",
    "FIELD7": "00 jam 22 menit"
  },
  {
    "FIELD1": "369",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "04.30",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "04.51",
    "FIELD7": "00 jam 21 menit"
  },
  {
    "FIELD1": "370",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "05.25",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "07.02",
    "FIELD7": ""
  },
  {
    "FIELD1": "371",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "07.30",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "09.08",
    "FIELD7": "01 jam 38 menit"
  },
  {
    "FIELD1": "372",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "09.35",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "11.22",
    "FIELD7": ""
  },
  {
    "FIELD1": "373",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "11.50",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "13.23",
    "FIELD7": ""
  },
  {
    "FIELD1": "374",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "13.55",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "15.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "375",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "16.30",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "18.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "376",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "18.40",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "20.37",
    "FIELD7": ""
  },
  {
    "FIELD1": "377",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "21.30",
    "FIELD5": "Gadobangkong (GK)",
    "FIELD6": "22.48",
    "FIELD7": ""
  },
  {
    "FIELD1": "378",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "23.20",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "23.56",
    "FIELD7": "00 jam 36 menit"
  },
  {
    "FIELD1": "379",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cibatu (CB)",
    "FIELD4": "05.10",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "08.08",
    "FIELD7": ""
  },
  {
    "FIELD1": "380",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "08.35",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "10.19",
    "FIELD7": ""
  },
  {
    "FIELD1": "381",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "10.45",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "12.23",
    "FIELD7": ""
  },
  {
    "FIELD1": "382",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "12.55",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "14.31",
    "FIELD7": ""
  },
  {
    "FIELD1": "383",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "15.20",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "17.13",
    "FIELD7": ""
  },
  {
    "FIELD1": "384",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "18.00",
    "FIELD5": "Cicalengka (CCL)",
    "FIELD6": "20.19",
    "FIELD7": "02 jam 19 menit"
  },
  {
    "FIELD1": "385",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Cicalengka (CCL)",
    "FIELD4": "20.45",
    "FIELD5": "Padalarang (PDL)",
    "FIELD6": "22.21",
    "FIELD7": ""
  },
  {
    "FIELD1": "386",
    "FIELD2": "Lokal Bandung Raya",
    "FIELD3": "Padalarang (PDL)",
    "FIELD4": "22.40",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "23.06",
    "FIELD7": "00 jam 26 menit"
  },
  {
    "FIELD1": "387",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "388",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "389",
    "FIELD2": "Pangrango",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "05.15",
    "FIELD5": "Bogorpaledang (PLD)",
    "FIELD6": "07.18",
    "FIELD7": "02 jam 03 menit"
  },
  {
    "FIELD1": "390",
    "FIELD2": "Pangrango",
    "FIELD3": "Bogorpaledang (PLD)",
    "FIELD4": "07.50",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "09.54",
    "FIELD7": "02 jam 04 menit"
  },
  {
    "FIELD1": "391",
    "FIELD2": "Pangrango",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "10.25",
    "FIELD5": "Bogorpaledang (PLD)",
    "FIELD6": "12.28",
    "FIELD7": "02 jam 03 menit"
  },
  {
    "FIELD1": "392",
    "FIELD2": "Pangrango",
    "FIELD3": "Bogorpaledang (PLD)",
    "FIELD4": "13.10",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "15.13",
    "FIELD7": "02 jam 03 menit"
  },
  {
    "FIELD1": "393",
    "FIELD2": "Pangrango",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "15.45",
    "FIELD5": "Bogorpaledang (PLD)",
    "FIELD6": "17.48",
    "FIELD7": "02 jam 03 menit"
  },
  {
    "FIELD1": "394",
    "FIELD2": "Pangrango",
    "FIELD3": "Bogorpaledang (PLD)",
    "FIELD4": "18.30",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "20.36",
    "FIELD7": "02 jam 06 menit"
  },
  {
    "FIELD1": "395",
    "FIELD2": "Lokal Cibatu",
    "FIELD3": "Cibatu (CB)",
    "FIELD4": "10.00",
    "FIELD5": "Purwakarta (PWK)",
    "FIELD6": "14.53",
    "FIELD7": "04 jam 53 menit"
  },
  {
    "FIELD1": "396",
    "FIELD2": "Lokal Cibatu",
    "FIELD3": "Purwakarta (PWK)",
    "FIELD4": "15.45",
    "FIELD5": "Cibatu (CB)",
    "FIELD6": "21.21",
    "FIELD7": ""
  },
  {
    "FIELD1": "397",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "398",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "399F*",
    "FIELD2": "Kiansantang",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "07.00",
    "FIELD5": "Cianjur (CJ)",
    "FIELD6": "09.17",
    "FIELD7": "02 jam 17 menit"
  },
  {
    "FIELD1": "400F*",
    "FIELD2": "Kiansantang",
    "FIELD3": "Cianjur (CJ)",
    "FIELD4": "11.05",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "13.30",
    "FIELD7": "02 jam 25 menit"
  },
  {
    "FIELD1": "401",
    "FIELD2": "Kaligung",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "06.20",
    "FIELD5": "Brebes (BB)",
    "FIELD6": "09.03",
    "FIELD7": ""
  },
  {
    "FIELD1": "402",
    "FIELD2": "Kaligung",
    "FIELD3": "Brebes (BB)",
    "FIELD4": "09.45",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "12.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "403",
    "FIELD2": "Kaligung",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "14.00",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "16.24",
    "FIELD7": "02 jam 24 menit"
  },
  {
    "FIELD1": "404",
    "FIELD2": "Kaligung",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "17.30",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "19.53",
    "FIELD7": "02 jam 23 menit"
  },
  {
    "FIELD1": "405",
    "FIELD2": "Kaligung",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "16.30",
    "FIELD5": "Tegal (TG)",
    "FIELD6": "18.55",
    "FIELD7": ""
  },
  {
    "FIELD1": "406",
    "FIELD2": "Kaligung",
    "FIELD3": "Brebes (BB)",
    "FIELD4": "12.15",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "15.26",
    "FIELD7": ""
  },
  {
    "FIELD1": "407",
    "FIELD2": "Kaligung",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "08.45",
    "FIELD5": "Brebes (BB)",
    "FIELD6": "11.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "408",
    "FIELD2": "Kaligung",
    "FIELD3": "Tegal (TG)",
    "FIELD4": "05.00",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "07.18",
    "FIELD7": "02 jam 18 menit"
  },
  {
    "FIELD1": "409",
    "FIELD2": "Kalijaga",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "05.20",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "08.15",
    "FIELD7": "02 jam 55 menit"
  },
  {
    "FIELD1": "410",
    "FIELD2": "Kalijaga",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "09.00",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "11.44",
    "FIELD7": "02 jam 44 menit"
  },
  {
    "FIELD1": "411",
    "FIELD2": "Dhoho",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "04.35",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "07.20",
    "FIELD7": ""
  },
  {
    "FIELD1": "412",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "07.47",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "10.04",
    "FIELD7": ""
  },
  {
    "FIELD1": "413",
    "FIELD2": "Dhoho",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "09.38",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "15.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "414",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "10.52",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "13.16",
    "FIELD7": ""
  },
  {
    "FIELD1": "415",
    "FIELD2": "Dhoho",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "12.26",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "14.58",
    "FIELD7": ""
  },
  {
    "FIELD1": "416",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "15.25",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "17.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "417",
    "FIELD2": "Dhoho",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "16.52",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "18.55",
    "FIELD7": ""
  },
  {
    "FIELD1": "418",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "20.20",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "22.35",
    "FIELD7": "02 jam 15 menit"
  },
  {
    "FIELD1": "419",
    "FIELD2": "Dhoho",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "04.55",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "07.31",
    "FIELD7": ""
  },
  {
    "FIELD1": "420",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "07.40",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "10.40",
    "FIELD7": "03 jam 00 menit"
  },
  {
    "FIELD1": "421",
    "FIELD2": "Dhoho",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "08.15",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "10.35",
    "FIELD7": "02 jam 20 menit"
  },
  {
    "FIELD1": "422",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "12.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "15.50",
    "FIELD7": "03 jam 05 menit"
  },
  {
    "FIELD1": "423",
    "FIELD2": "Dhoho",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "12.10",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "14.50",
    "FIELD7": "02 jam 40 menit"
  },
  {
    "FIELD1": "424",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "15.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "18.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "425",
    "FIELD2": "Dhoho",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "17.40",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "20.00",
    "FIELD7": "02 jam 20 menit"
  },
  {
    "FIELD1": "426",
    "FIELD2": "Dhoho",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "19.15",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "21.41",
    "FIELD7": ""
  },
  {
    "FIELD1": "427",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "428",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "429",
    "FIELD2": "Penataran",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "04.30",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "09.34",
    "FIELD7": "05 jam 04 menit"
  },
  {
    "FIELD1": "430",
    "FIELD2": "Penataran",
    "FIELD3": "Malang (ML)",
    "FIELD4": "04.30",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "07.16",
    "FIELD7": "02 jam 46 menit"
  },
  {
    "FIELD1": "431",
    "FIELD2": "Penataran",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "07.30",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "12.22",
    "FIELD7": "04 jam 52 menit"
  },
  {
    "FIELD1": "432",
    "FIELD2": "Penataran",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "04.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "09.52",
    "FIELD7": ""
  },
  {
    "FIELD1": "433",
    "FIELD2": "Penataran",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "11.25",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "16.43",
    "FIELD7": ""
  },
  {
    "FIELD1": "434",
    "FIELD2": "Penataran",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "10.20",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "15.18",
    "FIELD7": ""
  },
  {
    "FIELD1": "435",
    "FIELD2": "Penataran",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "17.30",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "22.46",
    "FIELD7": "05 jam 16 menit"
  },
  {
    "FIELD1": "436",
    "FIELD2": "Penataran",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "13.25",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "19.16",
    "FIELD7": ""
  },
  {
    "FIELD1": "437",
    "FIELD2": "Penataran",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "19.50",
    "FIELD5": "Malang (ML)",
    "FIELD6": "22.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "438",
    "FIELD2": "Penataran",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "17.45",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "22.40",
    "FIELD7": ""
  },
  {
    "FIELD1": "439",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "440",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "441",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "07.35",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "08.42",
    "FIELD7": ""
  },
  {
    "FIELD1": "442",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "10.00",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "10.55",
    "FIELD7": "00 jam 55 menit"
  },
  {
    "FIELD1": "443",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "11.00",
    "FIELD5": "Bojonegoro (BJ)",
    "FIELD6": "13.10",
    "FIELD7": "02 jam 10 menit"
  },
  {
    "FIELD1": "444",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Bojonegoro (BJ)",
    "FIELD4": "13.50",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "16.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "445",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "16.20",
    "FIELD5": "Sidoarjo (SDA)",
    "FIELD6": "17.14",
    "FIELD7": ""
  },
  {
    "FIELD1": "446",
    "FIELD2": "Lokal Sidoarjo-Bojonegoro",
    "FIELD3": "Sidoarjo (SDA)",
    "FIELD4": "18.15",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "19.12",
    "FIELD7": "00 jam 57 menit"
  },
  {
    "FIELD1": "447",
    "FIELD2": "Lokal Surabaya-Kertosono",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "10.00",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "12.42",
    "FIELD7": "02 jam 42 menit"
  },
  {
    "FIELD1": "448",
    "FIELD2": "Lokal Surabaya-Kertosono",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "04.40",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "07.26",
    "FIELD7": ""
  },
  {
    "FIELD1": "449",
    "FIELD2": "Lokal Surabaya-Kertosono",
    "FIELD3": "Surabaya Kota (SB)",
    "FIELD4": "20.00",
    "FIELD5": "Kertosono (KTS)",
    "FIELD6": "22.40",
    "FIELD7": "02 jam 40 menit"
  },
  {
    "FIELD1": "450",
    "FIELD2": "Lokal Surabaya-Kertosono",
    "FIELD3": "Kertosono (KTS)",
    "FIELD4": "14.25",
    "FIELD5": "Surabaya Kota (SB)",
    "FIELD6": "17.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "451",
    "FIELD2": "Pandanwangi",
    "FIELD3": "Jember (JR)",
    "FIELD4": "05.15",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "08.00",
    "FIELD7": "02 jam 45 menit"
  },
  {
    "FIELD1": "452",
    "FIELD2": "Pandanwangi",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "10.00",
    "FIELD5": "Jember (JR)",
    "FIELD6": "12.55",
    "FIELD7": "02 jam 55 menit"
  },
  {
    "FIELD1": "453",
    "FIELD2": "Pandanwangi",
    "FIELD3": "Jember (JR)",
    "FIELD4": "15.30",
    "FIELD5": "Banyuwangibaru (BW)",
    "FIELD6": "18.30",
    "FIELD7": "03 jam 00 menit"
  },
  {
    "FIELD1": "454",
    "FIELD2": "Pandanwangi",
    "FIELD3": "Banyuwangibaru (BW)",
    "FIELD4": "20.30",
    "FIELD5": "Jember (JR)",
    "FIELD6": "23.20",
    "FIELD7": "02 jam 50 menit"
  },
  {
    "FIELD1": "455",
    "FIELD2": "Siliwangi",
    "FIELD3": "Cianjur (CJ)",
    "FIELD4": "08.15",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "09.40",
    "FIELD7": ""
  },
  {
    "FIELD1": "456",
    "FIELD2": "Siliwangi",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "05.45",
    "FIELD5": "Cianjur (CJ)",
    "FIELD6": "07.10",
    "FIELD7": ""
  },
  {
    "FIELD1": "457",
    "FIELD2": "Siliwangi",
    "FIELD3": "Cianjur (CJ)",
    "FIELD4": "13.50",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "15.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "458",
    "FIELD2": "Siliwangi",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "10.20",
    "FIELD5": "Cianjur (CJ)",
    "FIELD6": "11.45",
    "FIELD7": ""
  },
  {
    "FIELD1": "459",
    "FIELD2": "Siliwangi",
    "FIELD3": "Cianjur (CJ)",
    "FIELD4": "18.15",
    "FIELD5": "Sukabumi (SI)",
    "FIELD6": "19.40",
    "FIELD7": ""
  },
  {
    "FIELD1": "460",
    "FIELD2": "Siliwangi",
    "FIELD3": "Sukabumi (SI)",
    "FIELD4": "15.50",
    "FIELD5": "Cianjur (CJ)",
    "FIELD6": "17.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "461",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "05.00",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "06.56",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "462",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "03.50",
    "FIELD5": "Merak (MER)",
    "FIELD6": "05.49",
    "FIELD7": ""
  },
  {
    "FIELD1": "463",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "06.30",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "08.27",
    "FIELD7": "01 jam 57 menit"
  },
  {
    "FIELD1": "464",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "07.45",
    "FIELD5": "Merak (MER)",
    "FIELD6": "09.54",
    "FIELD7": ""
  },
  {
    "FIELD1": "465",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "10.20",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "12.16",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "466",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "09.05",
    "FIELD5": "Merak (MER)",
    "FIELD6": "11.09",
    "FIELD7": "02 jam 04 menit"
  },
  {
    "FIELD1": "467",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "11.45",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "13.44",
    "FIELD7": "01 jam 59 menit"
  },
  {
    "FIELD1": "468",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "12.45",
    "FIELD5": "Merak (MER)",
    "FIELD6": "14.41",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "469",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "15.35",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "17.36",
    "FIELD7": "02 jam 01 menit"
  },
  {
    "FIELD1": "470",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "14.35",
    "FIELD5": "Merak (MER)",
    "FIELD6": "16.31",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "471",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Merak (MER)",
    "FIELD4": "17.20",
    "FIELD5": "Rangkasbitung (RK)",
    "FIELD6": "19.16",
    "FIELD7": "01 jam 56 menit"
  },
  {
    "FIELD1": "472",
    "FIELD2": "Lokal Merak",
    "FIELD3": "Rangkasbitung (RK)",
    "FIELD4": "20.00",
    "FIELD5": "Merak (MER)",
    "FIELD6": "21.57",
    "FIELD7": "01 jam 57 menit"
  },
  {
    "FIELD1": "|",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "7001*",
    "FIELD2": "Argo Muria Tambahan (KLB)",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "07.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "13.08",
    "FIELD7": "06 jam 08 menit"
  },
  {
    "FIELD1": "7002*",
    "FIELD2": "Argo Muria Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "13.45",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "19.58",
    "FIELD7": ""
  },
  {
    "FIELD1": "7003*",
    "FIELD2": "Argo Sindoro Tambahan (KLB)",
    "FIELD3": "Semarangtawang (SMT)",
    "FIELD4": "16.50",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "23.03",
    "FIELD7": ""
  },
  {
    "FIELD1": "7004*",
    "FIELD2": "Argo Sindoro Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "23.45",
    "FIELD5": "Semarangtawang (SMT)",
    "FIELD6": "06.09",
    "FIELD7": ""
  },
  {
    "FIELD1": "7005*",
    "FIELD2": "Argo Jati Tambahan (KLB)",
    "FIELD3": "Cirebon (CN)",
    "FIELD4": "21.15",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "00.10",
    "FIELD7": ""
  },
  {
    "FIELD1": "7006*",
    "FIELD2": "Argo Jati Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "00.40",
    "FIELD5": "Cirebon (CN)",
    "FIELD6": "03.30",
    "FIELD7": "02 jam 55 menit"
  },
  {
    "FIELD1": "7007*",
    "FIELD2": "Gajayana Tambahan (KLB)",
    "FIELD3": "Malang (ML)",
    "FIELD4": "19.45",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "11.14",
    "FIELD7": ""
  },
  {
    "FIELD1": "7008*",
    "FIELD2": "Gajayana Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "23.30",
    "FIELD5": "Malang (ML)",
    "FIELD6": "15.23",
    "FIELD7": ""
  },
  {
    "FIELD1": "7009*",
    "FIELD2": "Sembrani Tambahan (KLB)",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "09.00",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "19.35",
    "FIELD7": ""
  },
  {
    "FIELD1": "7010*",
    "FIELD2": "Sembrani Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "16.45",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "03.14",
    "FIELD7": ""
  },
  {
    "FIELD1": "7011*",
    "FIELD2": "Taksaka Tambahan (KLB)",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "06.40",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "14.30",
    "FIELD7": ""
  },
  {
    "FIELD1": "7012*",
    "FIELD2": "Taksaka Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "19.30",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "03.38",
    "FIELD7": ""
  },
  {
    "FIELD1": "7013*",
    "FIELD2": "Taksaka Tambahan (KLB)",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "22.15",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "05.53",
    "FIELD7": ""
  },
  {
    "FIELD1": "7014*",
    "FIELD2": "Taksaka Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "10.15",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "18.14",
    "FIELD7": ""
  },
  {
    "FIELD1": "7015*",
    "FIELD2": "Purwojaya Tambahan (KLB)",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "09.25",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "15.20",
    "FIELD7": ""
  },
  {
    "FIELD1": "7016*",
    "FIELD2": "Purwojaya Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "16.00",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "21.47",
    "FIELD7": ""
  },
  {
    "FIELD1": "7017*",
    "FIELD2": "Purwojaya Tambahan (KLB)",
    "FIELD3": "Kroya (KYA)",
    "FIELD4": "22.05",
    "FIELD5": "Cilacap (CP)",
    "FIELD6": "22.55",
    "FIELD7": "00 jam 50 menit"
  },
  {
    "FIELD1": "7018*",
    "FIELD2": "Purwojaya Tambahan (KLB)",
    "FIELD3": "Cilacap (CP)",
    "FIELD4": "08.20",
    "FIELD5": "Kroya (KYA)",
    "FIELD6": "09.02",
    "FIELD7": "00 jam 42 menit"
  },
  {
    "FIELD1": "7019*",
    "FIELD2": "Lodaya Tambahan (KLB)",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "22.05",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "06.34",
    "FIELD7": ""
  },
  {
    "FIELD1": "7020*",
    "FIELD2": "Lodaya Tambahan (KLB)",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "09.35",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "18.19",
    "FIELD7": ""
  },
  {
    "FIELD1": "7021*",
    "FIELD2": "Lodaya Tambahan (KLB)",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "08.15",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "17.19",
    "FIELD7": ""
  },
  {
    "FIELD1": "7022*",
    "FIELD2": "Lodaya Tambahan (KLB)",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "20.20",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "05.12",
    "FIELD7": ""
  },
  {
    "FIELD1": "7023*",
    "FIELD2": "Sancaka Tambahan (KLB)",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "09.40",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "14.43",
    "FIELD7": ""
  },
  {
    "FIELD1": "7024*",
    "FIELD2": "Sancaka Tambahan (KLB)",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "17.50",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "23.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "7025*",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "7026*",
    "FIELD2": "",
    "FIELD3": "",
    "FIELD4": "",
    "FIELD5": "",
    "FIELD6": "",
    "FIELD7": ""
  },
  {
    "FIELD1": "7027*",
    "FIELD2": "Kertajaya Tambahan (KLB)",
    "FIELD3": "Surabaya Pasar Turi (SBI)",
    "FIELD4": "23.35",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "10.50",
    "FIELD7": ""
  },
  {
    "FIELD1": "7028*",
    "FIELD2": "Kertajaya Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "08.45",
    "FIELD5": "Surabaya Pasar Turi (SBI)",
    "FIELD6": "20.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "7029*",
    "FIELD2": "Mataram Premium (KLB)",
    "FIELD3": "Lempuyangan (LPN)",
    "FIELD4": "08.20",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "16.54",
    "FIELD7": ""
  },
  {
    "FIELD1": "7030*",
    "FIELD2": "Mataram Premium (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "21.15",
    "FIELD5": "Lempuyangan (LPN)",
    "FIELD6": "05.17",
    "FIELD7": ""
  },
  {
    "FIELD1": "7031*",
    "FIELD2": "Brantas Tambahan (KLB)",
    "FIELD3": "Blitar (BL)",
    "FIELD4": "13.55",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "05.22",
    "FIELD7": ""
  },
  {
    "FIELD1": "7032*",
    "FIELD2": "Brantas Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "18.00",
    "FIELD5": "Blitar (BL)",
    "FIELD6": "08.55",
    "FIELD7": ""
  },
  {
    "FIELD1": "7033*",
    "FIELD2": "Matarmaja Tambahan (KLB)",
    "FIELD3": "Malang (ML)",
    "FIELD4": "19.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "11.19",
    "FIELD7": ""
  },
  {
    "FIELD1": "7034*",
    "FIELD2": "Matarmaja Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "18.45",
    "FIELD5": "Malang (ML)",
    "FIELD6": "11.05",
    "FIELD7": ""
  },
  {
    "FIELD1": "7035*",
    "FIELD2": "Pasundan Tambahan (KLB)",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "05.35",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "21.46",
    "FIELD7": ""
  },
  {
    "FIELD1": "7036*",
    "FIELD2": "Pasundan Tambahan (KLB)",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "06.45",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "22.58",
    "FIELD7": ""
  },
  {
    "FIELD1": "7037*",
    "FIELD2": "Kutojaya Utara Tambahan (KLB)",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "10.40",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "18.52",
    "FIELD7": ""
  },
  {
    "FIELD1": "7038*",
    "FIELD2": "Kutojaya Utara Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "23.20",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "07.25",
    "FIELD7": ""
  },
  {
    "FIELD1": "7039*",
    "FIELD2": "Kutojaya Utara Tambahan (KLB)",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "20.30",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "04.00",
    "FIELD7": ""
  },
  {
    "FIELD1": "7040*",
    "FIELD2": "Kutojaya Utara Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "08.30",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "16.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "7041*",
    "FIELD2": "Tawang Jaya Tambahan (KLB)",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "09.15",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "16.20",
    "FIELD7": ""
  },
  {
    "FIELD1": "7042*",
    "FIELD2": "Tawang Jaya Tambahan (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "19.45",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "02.31",
    "FIELD7": ""
  },
  {
    "FIELD1": "7043*",
    "FIELD2": "Tawang Jaya Premium (KLB)",
    "FIELD3": "Semarangponcol (SMC)",
    "FIELD4": "23.05",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "06.33",
    "FIELD7": ""
  },
  {
    "FIELD1": "7044*",
    "FIELD2": "Tawang Jaya Premium (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "10.45",
    "FIELD5": "Semarangponcol (SMC)",
    "FIELD6": "17.47",
    "FIELD7": ""
  },
  {
    "FIELD1": "7045*",
    "FIELD2": "Kutojaya Selatan Tambahan (KLB)",
    "FIELD3": "Kutoarjo (KTA)",
    "FIELD4": "11.10",
    "FIELD5": "Kiaracondong (KAC)",
    "FIELD6": "19.59",
    "FIELD7": ""
  },
  {
    "FIELD1": "7046*",
    "FIELD2": "Kutojaya Selatan Tambahan (KLB)",
    "FIELD3": "Kiaracondong (KAC)",
    "FIELD4": "23.30",
    "FIELD5": "Kutoarjo (KTA)",
    "FIELD6": "07.15",
    "FIELD7": ""
  },
  {
    "FIELD1": "10045*",
    "FIELD2": "Argo Parahyangan Tambahan (KLB)",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "22.30",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "01.52",
    "FIELD7": ""
  },
  {
    "FIELD1": "10052*",
    "FIELD2": "Argo Parahyangan Tambahan (KLB)",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "23.20",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "02.28",
    "FIELD7": ""
  },
  {
    "FIELD1": "10067",
    "FIELD2": "Jayakarta Premium",
    "FIELD3": "Surabaya Gubeng (SGU)",
    "FIELD4": "15.00",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "05.30",
    "FIELD7": ""
  },
  {
    "FIELD1": "10068",
    "FIELD2": "Jayakarta Premium",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "13.20",
    "FIELD5": "Surabaya Gubeng (SGU)",
    "FIELD6": "03.47",
    "FIELD7": ""
  },
  {
    "FIELD1": "10073*",
    "FIELD2": "Mantab Premium (KLB)",
    "FIELD3": "Madiun (MN)",
    "FIELD4": "19.50",
    "FIELD5": "Pasar Senen (PSE)",
    "FIELD6": "06.48",
    "FIELD7": ""
  },
  {
    "FIELD1": "10084*",
    "FIELD2": "Mantab Premium (KLB)",
    "FIELD3": "Pasar Senen (PSE)",
    "FIELD4": "22.35",
    "FIELD5": "Madiun (MN)",
    "FIELD6": "09.30",
    "FIELD7": ""
  },
  {
    "FIELD1": "10331",
    "FIELD2": "Wijayakusuma",
    "FIELD3": "Yogyakarta (YK)",
    "FIELD4": "09.30",
    "FIELD5": "Cilacap (CP)",
    "FIELD6": "13.30",
    "FIELD7": "04 jam 00 menit"
  },
  {
    "FIELD1": "10337",
    "FIELD2": "Argo Parahyangan Premium",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "14.05",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "17.30",
    "FIELD7": "03 jam 25 menit"
  },
  {
    "FIELD1": "10424",
    "FIELD2": "Argo Parahyangan Premium",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "18.00",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "21.14",
    "FIELD7": "03 jam 14 menit"
  },
  {
    "FIELD1": "10501",
    "FIELD2": "Argo Parahyangan Premium",
    "FIELD3": "Bandung (BD)",
    "FIELD4": "04.15",
    "FIELD5": "Gambir (GMR)",
    "FIELD6": "07.25",
    "FIELD7": "03 jam 10 menit"
  },
  {
    "FIELD1": "10554",
    "FIELD2": "Argo Parahyangan Premium",
    "FIELD3": "Gambir (GMR)",
    "FIELD4": "07.50",
    "FIELD5": "Bandung (BD)",
    "FIELD6": "11.07",
    "FIELD7": "03 jam 17 menit"
  },
  {
    "FIELD1": "10557",
    "FIELD2": "Wijayakusuma",
    "FIELD3": "Solobalapan (SLO)",
    "FIELD4": "19.45",
    "FIELD5": "Cilacap (CP)",
    "FIELD6": "01.00",
    "FIELD7": "05 jam 15 menit"
  },
  {
    "FIELD1": "10590",
    "FIELD2": "Wijayakusuma",
    "FIELD3": "Cilacap (CP)",
    "FIELD4": "05.00",
    "FIELD5": "Yogyakarta (YK)",
    "FIELD6": "08.20",
    "FIELD7": "03 jam 20 menit"
  },
  {
    "FIELD1": "10592",
    "FIELD2": "Wijayakusuma",
    "FIELD3": "Cilacap (CP)",
    "FIELD4": "14.10",
    "FIELD5": "Solobalapan (SLO)",
    "FIELD6": "19.13",
    "FIELD7": "05 jam 03 menit"
  }
];

var list = [];
const trainClass = ["Ekonomi", "Eksekutif", "Bissnis"];

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const field3 = element["FIELD3"].replace("(", "|").replace(")", "");
  const field5 = element["FIELD5"].replace("(", "|").replace(")", "");

  list[index] = {
    "train_name": element["FIELD2"],
    "train_class": trainClass[Math.floor(Math.random()*trainClass.length)],
    "price": 0,
    "station_start": {
      "name": field3.split("|")[0].substring(0, field3.split("|")[0].length-1),
      "code": field3.split("|")[1],
      "time": element["FIELD4"].replace(".", ":")
    },
    "station_end": {
      "name": field5.split("|")[0].substring(0, field3.split("|")[0].length-1),
      "code": field5.split("|")[1],
      "time": element["FIELD6"].replace(".", ":")
    }
  };
}

exports.index = list;