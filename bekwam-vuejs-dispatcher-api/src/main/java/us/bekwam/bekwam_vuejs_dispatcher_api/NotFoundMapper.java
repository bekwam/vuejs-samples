/*
 * Copyright 2021 Bekwam, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package us.bekwam.bekwam_vuejs_dispatcher_api;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.NoSuchElementException;

/**
 * Handles Optional NoSuchElement exception
 *
 * @author carl
 */
@Provider
public class NotFoundMapper implements ExceptionMapper<NoSuchElementException> {

    @Context
    private HttpServletRequest httpServletRequest;

    @Override
    public Response toResponse(NoSuchElementException e) {
        return Response
                .status(Response.Status.NOT_FOUND)
                .entity(httpServletRequest.getPathInfo() + " not found")
                .build();
    }
}
