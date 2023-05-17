package br.com.easycorp.droneseta.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Estoque {

    @Id
    @GeneratedValue
    private int sequencia;
    @ManyToOne(fetch = FetchType.LAZY)
    private Camiseta camiseta;
    private String tamanho;
    private boolean vendido;
    private String cor;

    public Estoque(Camiseta camiseta, String tamanho, String cor, boolean vendido) {
        this.camiseta = camiseta;
        this.tamanho = tamanho;
        this.cor = cor;
        this.vendido = vendido;
    }

    public Estoque() {
    }

    public int getSequencia() {
        return sequencia;
    }

    public void setSequencia(int sequencia) {
        this.sequencia = sequencia;
    }

    public Camiseta getCamiseta() {
        return camiseta;
    }

    public void setCamiseta(Camiseta camiseta) {
        this.camiseta = camiseta;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public boolean isVendido() {
        return vendido;
    }

    public void setVendido(boolean vendido) {
        this.vendido = vendido;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + sequencia;
        result = prime * result + ((camiseta == null) ? 0 : camiseta.hashCode());
        result = prime * result + ((tamanho == null) ? 0 : tamanho.hashCode());
        result = prime * result + (vendido ? 1231 : 1237);
        result = prime * result + ((cor == null) ? 0 : cor.hashCode());
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
        Estoque other = (Estoque) obj;
        if (sequencia != other.sequencia)
            return false;
        if (camiseta == null) {
            if (other.camiseta != null)
                return false;
        } else if (!camiseta.equals(other.camiseta))
            return false;
        if (tamanho == null) {
            if (other.tamanho != null)
                return false;
        } else if (!tamanho.equals(other.tamanho))
            return false;
        if (vendido != other.vendido)
            return false;
        if (cor == null) {
            if (other.cor != null)
                return false;
        } else if (!cor.equals(other.cor))
            return false;
        return true;
    }

    public Estoque(int sequencia, Camiseta camiseta, String tamanho, boolean vendido, String cor) {
        this.sequencia = sequencia;
        this.camiseta = camiseta;
        this.tamanho = tamanho;
        this.vendido = vendido;
        this.cor = cor;
    }

}
