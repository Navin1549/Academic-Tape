package com.inn.navin.rest.AcademicTape;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.Extension;
import io.swagger.annotations.ExtensionProperty;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;

@ResponseBody
@FeignClient(name = "IDCardSystemRest", url = "${academic-tape.url}", path = "/academic", primary = false)
@Api(tags = { "AcademicTapeRest" })
@SwaggerDefinition(tags = { @Tag(name = "AcademicTape", description = "Rest APIs of Academic Tape") })
public interface AcademicTapeRest {


    @GetMapping(path = "home")
	public String home();

    
    
}
