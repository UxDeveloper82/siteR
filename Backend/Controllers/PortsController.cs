using AutoMapper;
using Backend.Dtos;
using Backend.Entities;
using Backend.Interfaces;
using Backend.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sideR.Data;
using sideR.Dtos;
using sideR.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class PortsController : ControllerBase
    {
        private readonly IPortRepository _repo;
        private readonly IMapper _mapper;

        public PortsController(IPortRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> GetPorts()
        {
            var ports = await _repo.GetPorts();
            var portToReturn = _mapper.Map<IEnumerable<PortForListDto>>(ports);
            return Ok(portToReturn);
        
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Port>> GetPort(int id)
        {
            var port = await _repo.GetPort(id);
            return Ok(port);

        }

        [HttpPost]
        public async Task<ActionResult> NewPort (PortViewModel vm)
        {
            var port = new Port
            {
                Id = vm.Id,
                Name = vm.Name,
                Type = vm.Type,
                Language = vm.Language,
                Link = vm.Link,
                GitLink = vm.GitLink,
            };
            _repo.Add(port);
            await _repo.SaveAll();
            return RedirectToAction(nameof(GetPorts));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePort(int id, PortForUpdateDto portForUpdateDto)
        {
            var portFromRepo = await _repo.GetPort(id);
            _mapper.Map(portForUpdateDto, portFromRepo);
           
            if(await _repo.SaveAll())
               return NoContent();
            throw new Exception($"Updating use {id} failed on save");
        }
    }
}