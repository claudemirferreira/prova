package br.com.fpf.prova.agenda.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "PDV_AGENDA")
@SequenceGenerator(name = "PDV_AGENDA_SEQ", sequenceName = "PDV_AGENDA_ID_SEQ", allocationSize = 1)
public class Cliente implements Serializable {

    private static final long serialVersionUID = -8763866015525986152L;

    @Id
    @Column(name = "AGENDA_ID")
    @GeneratedValue(generator = "PDV_AGENDA_SEQ", strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;

    private String sobrenome;

    private String telefone;

    private String apelido;

    private Date dataCadastro;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

}