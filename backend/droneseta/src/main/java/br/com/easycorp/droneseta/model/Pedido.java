package br.com.easycorp.droneseta.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Pedido {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JsonIgnore
    private Usuario usuario;

    @ElementCollection
    private List<Estoque> itens;

    private SituacaoPedido situacao;

    @OneToOne(cascade = CascadeType.REFRESH)
    private Endereco endereco;

    public Pedido() {
    }

    public Pedido(int id, Usuario usuario, List<Estoque> itens, SituacaoPedido situacao, Endereco endereco) {
        this.id = id;
        this.usuario = usuario;
        this.itens = itens;
        this.situacao = situacao;
        this.endereco = endereco;
    }

    public Pedido(Usuario usuario, List<Estoque> itens, SituacaoPedido situacao, Endereco endereco) {
        this.usuario = usuario;
        this.itens = itens;
        this.situacao = situacao;
        this.endereco = endereco;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Estoque> getItens() {
        return itens;
    }

    public void setItens(List<Estoque> itens) {
        this.itens = itens;
    }

    public SituacaoPedido getSituacao() {
        return situacao;
    }

    public void setSituacao(SituacaoPedido situacao) {
        this.situacao = situacao;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
        result = prime * result + ((itens == null) ? 0 : itens.hashCode());
        result = prime * result + ((situacao == null) ? 0 : situacao.hashCode());
        result = prime * result + ((endereco == null) ? 0 : endereco.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Pedido other = (Pedido) obj;
        if (id != other.id)
            return false;
        if (usuario == null) {
            if (other.usuario != null)
                return false;
        } else if (!usuario.equals(other.usuario))
            return false;
        if (itens == null) {
            if (other.itens != null)
                return false;
        } else if (!itens.equals(other.itens))
            return false;
        if (situacao != other.situacao)
            return false;
        if (endereco == null) {
            if (other.endereco != null)
                return false;
        } else if (!endereco.equals(other.endereco))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Pedido [id=" + id + ", usuario=" + usuario + ", itens=" + itens + ", situacao=" + situacao
                + ", endereco=" + endereco + "]";
    }

}
