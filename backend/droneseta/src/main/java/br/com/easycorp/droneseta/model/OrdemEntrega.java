package br.com.easycorp.droneseta.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity
public class OrdemEntrega {

      @Id
      @GeneratedValue
      private int id;
      @OneToMany(fetch = FetchType.EAGER)
      private List<Pedido> pedidos = new ArrayList<>();
      private Date dataSaida;
      private Date dataEntrega;
      @Transient
      private int previsaoDeEntrega;

      public OrdemEntrega(int id, List<Pedido> pedidos, Date dataSaida, Date dataEntrega) {
            this.id = id;
            this.pedidos = pedidos;
            this.dataSaida = dataSaida;
            this.dataEntrega = dataEntrega;
      }

      public OrdemEntrega(int id, List<Pedido> pedidos, Date dataSaida) {
            this.id = id;
            this.pedidos = pedidos;
            this.dataSaida = dataSaida;
      }

      public OrdemEntrega(List<Pedido> pedidos, Date dataSaida) {
            this.pedidos = pedidos;
            this.dataSaida = dataSaida;
      }

      public OrdemEntrega() {
      }

      public int getId() {
            return id;
      }

      public void setId(int id) {
            this.id = id;
      }

      public List<Pedido> getPedidos() {
            return pedidos;
      }

      public void setPedidos(List<Pedido> pedidos) {
            this.pedidos = pedidos;
      }

      public Date getDataSaida() {
            return dataSaida;
      }

      public void setDataSaida(Date dataSaida) {
            this.dataSaida = dataSaida;
      }

      public Date getDataEntrega() {
            return dataEntrega;
      }

      public void setDataEntrega(Date dataEntrega) {
            this.dataEntrega = dataEntrega;
      }

      

      @Override
      public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + id;
            result = prime * result + ((pedidos == null) ? 0 : pedidos.hashCode());
            result = prime * result + ((dataSaida == null) ? 0 : dataSaida.hashCode());
            result = prime * result + ((dataEntrega == null) ? 0 : dataEntrega.hashCode());
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
            OrdemEntrega other = (OrdemEntrega) obj;
            if (id != other.id)
                  return false;
            if (pedidos == null) {
                  if (other.pedidos != null)
                        return false;
            } else if (!pedidos.equals(other.pedidos))
                  return false;
            if (dataSaida == null) {
                  if (other.dataSaida != null)
                        return false;
            } else if (!dataSaida.equals(other.dataSaida))
                  return false;
            if (dataEntrega == null) {
                  if (other.dataEntrega != null)
                        return false;
            } else if (!dataEntrega.equals(other.dataEntrega))
                  return false;
            return true;
      }

      @Override
      public String toString() {
            return "OrdemEntrega [id=" + id + ", pedidos=" + pedidos + ", dataSaida=" + dataSaida + ", dataEntrega="
                        + dataEntrega + "]";
      }

      public int getPrevisaoDeEntrega() {
            return previsaoDeEntrega;
      }

      public void setPrevisaoDeEntrega(int previsaoDeEntrega) {
            this.previsaoDeEntrega = previsaoDeEntrega;
      }

}
