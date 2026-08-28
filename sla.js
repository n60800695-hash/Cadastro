
        const formulario = document.getElementById("formulario");
        const nome = document.getElementById("nome");
        const idade = document.getElementById("idade");
        const listaAlunos = document.getElementById("listaAlunos");
        
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
        
            if (nome.value === "" || idade.value === "") {
                alert("Preencha todos os campos!");
                return;
            }
        
            const aluno = document.createElement("li");
        
            aluno.textContent = `${nome.value} - ${idade.value} anos`;
        
            listaAlunos.appendChild(aluno);
        
            nome.value = "";
            idade.value = "";
        
            nome.focus();
        });
