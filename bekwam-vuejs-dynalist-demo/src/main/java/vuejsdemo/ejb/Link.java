package vuejsdemo.ejb;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Link {

    @Id
    @GeneratedValue
    private Long linkId;

    @NotNull
    @Size(max = 255)
    private String linkHref;

    @OrderColumn
    private Integer linkSort;

    public Long getLinkId() {
        return linkId;
    }

    public void setLinkId(Long linkId) {
        this.linkId = linkId;
    }

    public String getLinkHref() {
        return linkHref;
    }

    public void setLinkHref(String linkHref) {
        this.linkHref = linkHref;
    }

    public Integer getLinkSort() {
        return linkSort;
    }

    public void setLinkSort(Integer linkSort) {
        this.linkSort = linkSort;
    }
}
