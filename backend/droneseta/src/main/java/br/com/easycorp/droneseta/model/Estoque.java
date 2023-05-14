package br.com.easycorp.droneseta.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Embeddable
@Entity
public class Estoque {

    @Id
    @GeneratedValue
    private int sequencia;
    private String tamanho;

    public Estoque() {

    }

    public Estoque(int sequencia, String tamanho) {
        this.sequencia = sequencia;
        this.tamanho = tamanho;
    }

    public int getSequencia() {
        return sequencia;
    }

    public void setSequencia(int sequencia) {
        this.sequencia = sequencia;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + sequencia;
        result = prime * result + ((tamanho == null) ? 0 : tamanho.hashCode());
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
        if (tamanho == null) {
            if (other.tamanho != null)
                return false;
        } else if (!tamanho.equals(other.tamanho))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Estoque [sequencia=" + sequencia + ", tamanho=" + tamanho + "]";
    }

}
