 var SecuenciaID = null
        var imagen = 0
        var duracion = 1000
         
        {imagenes = new CreaArray(3)
        imagenes[1].src = "cocla1.png"
        imagenes[2].src = "cocla2.png"
        imagenes[3].src = "cocla3.png"
        }
         
        function CreaArray(n) {
            this.length = n
            for (var i = 1; i<=n; i++) {
                this[i] = new Image()
            }
            return this
        }
         
        function MostrarSecuencia() {
            {
                document.images["secuencia"].src = imagenes[imagen].src
                imagen++
                if ( imagen == 4)
                    imagen = 1
            }
            SecuenciaID = setTimeout("MostrarSecuencia()", duracion)
            SecuenciaEjecutandose = true
        }
         
        function IniciarSecuencia() {
            imagen = 1
            MostrarSecuencia()
        }

        