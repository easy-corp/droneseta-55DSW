package br.com.easycorp.droneseta.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class Camiseta {

    @Id
    @GeneratedValue
    private int id;

    private String descricao;
    @Lob
    private String foto;
    private double preco;

    @OneToMany(mappedBy = "camiseta")
    @JsonIgnoreProperties("camiseta")
    private List<Estoque> estoque = new ArrayList<>();

    public Camiseta() {

    }

    public Camiseta(String descricao, String foto, double preco) {
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }

    public Camiseta(String descricao, String foto, double preco, List<Estoque> estoque) {
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
        this.estoque = estoque;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public List<Estoque> getEstoque() {
        return estoque;
    }

    public void setEstoque(List<Estoque> estoque) {
        this.estoque = estoque;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
        result = prime * result + ((foto == null) ? 0 : foto.hashCode());
        long temp;
        temp = Double.doubleToLongBits(preco);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + ((estoque == null) ? 0 : estoque.hashCode());
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
        Camiseta other = (Camiseta) obj;
        if (id != other.id)
            return false;
        if (descricao == null) {
            if (other.descricao != null)
                return false;
        } else if (!descricao.equals(other.descricao))
            return false;
        if (foto == null) {
            if (other.foto != null)
                return false;
        } else if (!foto.equals(other.foto))
            return false;
        if (Double.doubleToLongBits(preco) != Double.doubleToLongBits(other.preco))
            return false;
        if (estoque == null) {
            if (other.estoque != null)
                return false;
        } else if (!estoque.equals(other.estoque))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Camiseta [id=" + id + ", descricao=" + descricao + ", foto=" + foto + ", preco=" + preco + ", estoque="
                + estoque + "]";
    }

}
