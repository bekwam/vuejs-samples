package us.bekwam.bekwam_vuejs_dispatcher_api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Path("/config")
@Produces(MediaType.APPLICATION_JSON)
public class ConfigResource {

    private static List<Config> configs = Arrays.asList(
        new Config("123", "a", "My App 'A'"),
        new Config("456", "b", "My App 'B'")
    );

    @GET
    @Path("/{key}")
    public Config getConfig(@PathParam("key") String key) {
        Config keyObj = new Config(key);
        return configs
                .stream()
                .filter(c -> c.equals(keyObj))
                .findFirst()
                .get();
    }

    @GET
    public List<String> getKeys() {
        return configs
                .stream()
                .map( Config::getKey )
                .collect(Collectors.toList());
    }
}